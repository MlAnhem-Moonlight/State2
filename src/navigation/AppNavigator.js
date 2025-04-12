import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native'; // Thêm SafeAreaView
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductScreen from '../screens/ProductScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const CategoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={CategoryScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}> {/* Bao bọc Tab.Navigator bằng SafeAreaView */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Shop') iconName = 'home';
              else if (route.name === 'Explore') iconName = 'search';
              else if (route.name === 'Cart') iconName = 'cart';
              else if (route.name === 'Favourite') iconName = 'heart';
              else if (route.name === 'Account') iconName = 'person';
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Shop" component={HomeStack} />
          <Tab.Screen name="Explore" component={CategoryStack} />
          <Tab.Screen name="Cart" component={() => null} />
          <Tab.Screen name="Favourite" component={() => null} />
          <Tab.Screen name="Account" component={() => null} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;/*  gây ra warning text null do không có screen được truyền vào */