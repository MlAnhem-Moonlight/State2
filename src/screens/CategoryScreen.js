// src/screens/CategoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Dimensions } from 'react-native';
import CategoryCard from '../components/CategoryCard'; // Updated path
import { categories } from '../data/products'; // Updated path
import Icon from 'react-native-vector-icons/Ionicons';

// Get the screen width
const { width } = Dimensions.get('window');

const CategoryScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <View style={styles.categoryCardContainer}>
      <CategoryCard category={item} navigation={navigation} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Title */}
      <Text style={styles.headerTitle}>Find Products</Text>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#999"
        />
      </View>
      
      {/* Categories Grid */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  categoryCardContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
    maxWidth: (width - 40) / 2,
    aspectRatio: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default CategoryScreen;