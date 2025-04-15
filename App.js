import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './screen/UserListScreen';
import AddUserScreen from './screen/AddUserScreen';
import UserDetailScreen from './screen/UserDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen 
          name="UserList" 
          component={UserListScreen} 
          options={{ title: 'Danh sách người dùng' }} 
        />
        <Stack.Screen 
          name="AddUser" 
          component={AddUserScreen} 
          options={{ title: 'Thêm người dùng mới' }} 
        />
        <Stack.Screen 
          name="UserDetail" 
          component={UserDetailScreen} 
          options={{ title: 'Chi tiết người dùng' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
