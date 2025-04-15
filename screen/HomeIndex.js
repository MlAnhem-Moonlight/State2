// filepath: /C:/MyFlow/Mobile/m_31_12/screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
    
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" iconName="ios-menu" onIconPress={() => Alert.alert('Icon Button Pressed')} />
      <View style={styles.container1}>
        <Text style={styles.txt1}>Welcome to Home Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    alignItems: 'center',
    marginTop: 20,
  },
  txt1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;