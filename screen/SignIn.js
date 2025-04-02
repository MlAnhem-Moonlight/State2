import { StyleSheet, View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon2 from '../assets/icon_2.png';
import React, { useState } from 'react';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image source={icon2} style={{ width: 49, height: 57, alignSelf: 'center', marginTop: 77, marginBottom: 10 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 26, marginTop: 36, marginBottom: 10 }}>Login</Text>
        <Text style={{fontSize: 16, color: '#7C7C7C' }}>
          Enter your email and password
        </Text>

        {/* Email Text Box */}
        <Text style={{fontSize: 16, color: '#7C7C7C',marginTop:10  }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Text Box */}
        <Text style={{fontSize: 16, color: '#7C7C7C',marginTop:10 }}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity>
            <Text style={{fontSize: 16, color: '#7C7C7C', alignSelf:'flex-end' }}>Forgot password?</Text>   
        </TouchableOpacity> 
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Navigate to Sign Up */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#7C7C7C',
  },
  signUpLink: {
    color: '#53B175',
    fontWeight: 'bold',
  },
});