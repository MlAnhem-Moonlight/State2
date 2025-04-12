import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require('../assets/images/banner.png')} // Thay bằng hình ảnh banner của bạn
        style={styles.bannerImage}
      />
      <Text style={styles.bannerText}>Fresh Vegetables</Text>
      <Text style={styles.bannerSubText}>Get Up to 40% OFF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  bannerText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerSubText: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 16,
    color: '#fff',
  },
});

export default Banner;