import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';

const SignInScreen = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber || '');

  const handlePhoneNumberPress = () => {
    navigation.navigate('PhoneNumberInput', { phoneNumber });
  };

  return (
    <View style={styles.container}>
    <View style={styles.backgroundImageContainer}>
      <ImageBackground
        source={require('../assets/signin_background.png')}
        style={styles.backgroundImage}
      />
    </View>
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Get your groceries</Text>
        <Text style={styles.title}>with nectar</Text>
      </View>
      <TouchableOpacity style={styles.inputContainer} onPress={handlePhoneNumberPress}>
        <View style={styles.countryCodeContainer}>
          <Image
            source={require('../assets/flag.png')}
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            editable={false}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.orText}>Or connect with social media</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/google_logo.png')}
          style={styles.socialLogo}
        />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Image
          source={require('../assets/facebook_logo.png')}
          style={styles.socialLogo}
        />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    width: 413.37, 
    height: 374.15, 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center', 
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: 40, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 40,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    paddingBottom: 5, 
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flag: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  countryCode: {
    fontSize: 18,
    color: '#000',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
    alignSelf: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    width: 364, 
    height: 67, 
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    width: 364,
    height: 67, 
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  socialLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;