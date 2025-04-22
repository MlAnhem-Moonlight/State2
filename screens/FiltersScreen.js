// screens/FiltersScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories, brands } from '../data/data';
import FilterItem from '../components/FilterItem';

const FiltersScreen = ({ navigation, route }) => {
  const { activeFilters, onApplyFilters } = route.params;
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    setSelectedCategories(activeFilters.categories || []);
    setSelectedBrands(activeFilters.brands || []);
  }, []);

  const toggleCategory = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;
    
    setSelectedCategories(prev => {
      if (prev.includes(category.name)) {
        return prev.filter(name => name !== category.name);
      } else {
        return [...prev, category.name];
      }
    });
  };

  const toggleBrand = (brandId) => {
    const brand = brands.find(b => b.id === brandId);
    if (!brand) return;
    
    setSelectedBrands(prev => {
      if (prev.includes(brand.name)) {
        return prev.filter(name => name !== brand.name);
      } else {
        return [...prev, brand.name];
      }
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      categories: selectedCategories,
      brands: selectedBrands
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          {categories.map(category => (
            <FilterItem 
              key={category.id}
              item={category}
              isSelected={selectedCategories.includes(category.name)}
              onToggle={toggleCategory}
            />
          ))}
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          {brands.map(brand => (
            <FilterItem 
              key={brand.id}
              item={brand}
              isSelected={selectedBrands.includes(brand.name)}
              onToggle={toggleBrand}
            />
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={handleApplyFilters}
        >
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FiltersScreen;