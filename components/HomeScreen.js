import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const popularItems = [
    {
      id: '1',
      title: 'Phở',
      subtitle: 'By Viet Nam',
      price: '1$',
      image: require('../assets/Img/Pho.jpeg'),
    },
    {
      id: '2',
      title: 'Bún Chả',
      subtitle: 'By Viet Nam',
      price: '3$',
      image: require('../assets/Img/Buncha.jpg'),
    },
    {
      id: '3',
      title: 'Fish n Chip',
      subtitle: 'By England',
      price: '2$',
      image: require('../assets/Img/FishnChip.jpg'),
    },
    {
      id: '4',
      title: 'Bánh Cuốn',
      subtitle: 'By Viet Nam',
      price: '4$',
      image: require('../assets/Img/banhcuon.jpg'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explorer</Text>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#ccc" />
          <TextInput
            placeholder="Search for meals or area"
            style={styles.searchInput}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={20} color="orange" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        <View style={styles.category}>
          <Image source={require('../assets/Img/Pizza.jpg')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Pizza</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/Img/Burger.jpg')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Burgers</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../assets/Img/Steak.jpg')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Steak</Text>
        </View>
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemsContainer}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemsContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 5,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  category: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  itemsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    width: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  viewAllText: {
    color: 'orange',
  },
});

export default HomeScreen;