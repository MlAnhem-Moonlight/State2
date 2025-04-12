import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { categories, beverages, freshFruitsAndVegetables } from '../data/products';

const { width } = Dimensions.get('window');

const ProductScreen = ({ route }) => {
  const { categoryName } = route.params;

  // Map category name to the corresponding products array
  let products = [];
  if (categoryName === 'Beverages') {
    products = beverages;
  } else if (categoryName === 'Fresh Fruits & Vegetable') {
    products = freshFruitsAndVegetables;
  }
  // Nếu bạn có thêm danh mục khác, hãy thêm logic ở đây, ví dụ:
  // else if (categoryName === 'Electronics') { products = electronics; }

  const renderProduct = ({ item }) => (
    <View style={styles.productCardContainer}>
      <ProductCard product={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{categoryName}</Text>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products available for {categoryName}.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  productCardContainer: {
    flex: 1,
    margin: 5,
    maxWidth: (width - 40) / 2,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default ProductScreen;