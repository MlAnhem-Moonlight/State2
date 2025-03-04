import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignInPress = () => {
    let valid = true;
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
        onChangeText={(text) => {
          setUsername(text);
          if(text.length !== 0)
          {
            if (!validateEmail(text)) 
            {
              setEmailError('Thông tin email không đúng');
            } 
            else 
            {
              setEmailError('');
            }
          }
          else setEmailError('');
        }}
        style={styles.input}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if(text.length !== 0){
            if (!validatePassword(text)) {
              setPasswordError('Mật khẩu dài ít nhất 6 kí tự');
            } else {
              setPasswordError('');
            }
          }
          else setPasswordError('');
        }}
        secureTextEntry
        style={styles.input}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
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
  signInButton: {
    width: '80%',
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginVertical: 10,
  },
  forgotPasswordButtonText: {
    color: 'orange',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#000',
  },
  signUpButtonText: {
    color: 'orange',
    marginLeft: 5,
  },
});

export default SignIn;