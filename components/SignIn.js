// filepath: /C:/MyFlow/Mobile/m_31_12/components/SignIn.js
import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { AppContext } from '../context/AppContext';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { setIsLoggedIn } = useContext(AppContext);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignInPress = () => {
    let valid = true;

    if (!validateEmail(username)) {
      setEmailError('Thông tin email không đúng');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Mật khẩu dài ít nhất 6 kí tự');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Nếu đăng nhập thành công, gọi setIsLoggedIn(true)
      setIsLoggedIn(true);
      alert('Đăng nhập thành công');
    }
    else {
      alert('Đăng nhập thất bại');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Button title="Sign In" onPress={handleSignInPress} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
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
});

export default SignIn;