// filepath: /C:/MyFlow/Mobile/m_31_12/components/SignIn.js
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { AppContext } from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    } else {
      alert('Đăng nhập thất bại');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Img/R.png')} style={{ width: 200, height: 200 }} />
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        placeholder="Email ID"
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
      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <Icon name="google" size={20} color="black" />
          <Text style={styles.socialButtonText}> Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFaceBook}>
          <Icon name="facebook" size={20} color="white" />
          <Text style={styles.socialButtonTextFacebook}> Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}> Sign Up</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
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
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'orange',
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  socialButtonFaceBook: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgb(0, 118, 173)',
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  socialButtonGoogle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  socialButtonTextFacebook: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#000',
  },
  signUpLink: {
    color: 'orange',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SignIn;