import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider, AppContext } from './context/AppContext';
import BottomTab from './components/Stack/BottomTab';
import AuthStack from './components/Stack/AuthStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ isLoggedIn }) => (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={isLoggedIn ? "BottomTab" : "Auth"}
              screenOptions={{
                headerTitleAlign: 'center', // Căn giữa tiêu đề của màn hình
              }}
            >
              {isLoggedIn ? (
                <Stack.Screen name="Main" component={BottomTab} />
              ) : (
                <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}