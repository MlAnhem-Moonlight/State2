// components/BottomTabBar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomTabBar = ({ activeTab }) => {
  const tabs = [
    { name: 'Shop', icon: 'home-outline' },
    { name: 'Explore', icon: 'search-outline' },
    { name: 'Cart', icon: 'cart-outline' },
    { name: 'Favourite', icon: 'heart-outline' },
    { name: 'Account', icon: 'person-outline' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.tab}
          onPress={() => {}}
        >
          <Ionicons 
            name={tab.name === activeTab ? tab.icon.replace('-outline', '') : tab.icon} 
            size={22} 
            color={tab.name === activeTab ? '#4CAF50' : '#777'} 
          />
          <Text 
            style={[
              styles.tabText, 
              tab.name === activeTab && styles.activeTabText
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  activeTabText: {
    color: '#4CAF50',
  },
});

export default BottomTabBar;