import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignUpPress = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Thông tin email không đúng');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Mật khẩu dài ít nhất 6 kí tự');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Handle sign-up logic here
      alert('Đăng ký thành công');
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
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
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (!validatePassword(text)) {
            setPasswordError('Mật khẩu dài ít nhất 6 kí tự');
          } else {
            setPasswordError('');
          }
        }}
        secureTextEntry
        style={styles.input}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUpPress}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>       
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignIn' }],
        })
        }
      >
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
  signUpButton: {
    width: '80%',
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signInButtonText: {
    color: 'orange',
    marginTop: 10,
  },
});

export default SignUp;