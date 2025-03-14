// filepath: /C:/MyFlow/Mobile/m_31_12/navigation/Stack/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import ForgotPassword from '../../components/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTitleAlign: 'center', // Căn giữa tiêu đề của màn hình
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;