import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleResetPasswordPress = () => {
    if (!validateEmail(email)) {
      setEmailError('Thông tin email không đúng');
    } else {
      setEmailError('');
      // Handle password reset logic here
      alert('Yêu cầu đặt lại mật khẩu đã được gửi');
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Forgot Password Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (!validateEmail(text)) {
            setEmailError('Thông tin email không đúng');
            
          } else {
            setEmailError('');
          }
        }}
        style={styles.input}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPasswordPress}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInButtonText}>Go to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  resetButton: {
    width: '80%',
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signInButtonText: {
    color: 'orange',
    marginTop: 10,
  },
});

export default ForgotPassword;