// screens/SearchScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  Text
} from 'react-native';
import { products } from '../data/data';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import BottomTabBar from '../components/BottomTabBar';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    brands: []
  });

  useEffect(() => {
    filterProducts();
  }, [searchQuery, activeFilters]);

  const filterProducts = () => {
    let filtered = products;
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by categories
    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter(product => 
        activeFilters.categories.includes(product.category)
      );
    }
    
    // Filter by brands
    if (activeFilters.brands.length > 0) {
      filtered = filtered.filter(product => 
        activeFilters.brands.includes(product.brand)
      );
    }
    
    setFilteredProducts(filtered);
  };

  const handleFilterPress = () => {
    navigation.navigate('Filters', { 
      activeFilters, 
      onApplyFilters: setActiveFilters 
    });
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const renderItem = ({ item }) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFilterPress={handleFilterPress}
        onClear={clearSearch}
      />
      
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      )}
      
      <BottomTabBar activeTab="Explore" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
  }
});

export default SearchScreen;