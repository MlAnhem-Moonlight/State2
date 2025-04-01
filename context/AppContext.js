import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: 'Ml Anhem',
    email: 'q0345194302@gmail.com',
    password: 'anmisoi12'
  });

  useEffect(() => {
    loadLoginState();
    loadUserProfile();
  }, []);

  const loadLoginState = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value));
      }
    } catch (error) {
      console.log('Error loading login state:', error);
    }
  };

  const loadUserProfile = async () => {
    try {
      const profile = await AsyncStorage.getItem('userProfile');
      if (profile !== null) {
        setUserProfile(JSON.parse(profile));
      }
    } catch (error) {
      console.log('Error loading user profile:', error);
    }
  };

  const setLoggedIn = async (value) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(value));
      setIsLoggedIn(value);
    } catch (error) {
      console.log('Error saving login state:', error);
    }
  };

  const updateUserProfile = async (profile) => {
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
      setUserProfile(profile);
    } catch (error) {
      console.log('Error saving user profile:', error);
    }
  };

  return (
    <AppContext.Provider 
      value={{ 
        isLoggedIn, 
        setIsLoggedIn: setLoggedIn,
        userProfile,
        updateUserProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};