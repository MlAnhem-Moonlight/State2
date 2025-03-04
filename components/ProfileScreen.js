import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const ProfileScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Go to Login" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;