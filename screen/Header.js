import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, iconName, onIconPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onIconPress} style={styles.icon}>
        <Ionicons name={iconName} size = {24}/>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  icon: {
    position: 'absolute',
    left: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color:"black"
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 24, // same width as the icon to balance the layout
  },
});

export default Header;