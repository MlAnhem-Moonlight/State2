import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ category, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductScreen', { categoryName: category.name })}
      style={[styles.card, { backgroundColor: category.backgroundColor }]}
    >
      {category.image ? (
        <Image source={category.image} style={styles.image} resizeMode="contain" />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 10,
    height: '100%',
  },
  image: {
    width: '80%',
    height: '60%',
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: '80%',
    height: '60%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#666',
    fontSize: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
});

export default CategoryCard;