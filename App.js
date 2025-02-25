import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, Button, Alert } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState('');
  const [textColor, setTextColor] = useState('rgb(255, 0, 0)');

  const handlePress = () => {
    if (textInput.length != 0) {
      const formattedText = textInput.replace(/\s/g, '');
      if (/^\d+$/.test(formattedText) && formattedText.length === 10 && formattedText[0] === '0') {
        Alert.alert('SUCCESS', 'CHÀO MỪNG ĐẾN VỚI HỆ THỐNG', [
          {
            text: 'OK',
            onPress: () => navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            }),
          },
        ]);
      } else {
        Alert.alert('ERROR', 'SỐ ĐIỆN THOẠI KHÔNG TỒN TẠI HOẶC KHÔNG HỢP LỆ');
      }
    } else {
      Alert.alert('ERROR', 'VUI LÒNG NHẬP SỐ ĐIỆN THOẠI');
    }
  }

  const handleTextChange = (text) => {
    let formattedText = text.replace(/[^\d]/g, '');
    let displayText = formattedText;

    if (formattedText.length > 4) {
      displayText = `${formattedText.slice(0, 4)} ${formattedText.slice(4)}`;
    }
    if (formattedText.length > 7) {
      displayText = `${displayText.slice(0, 8)} ${displayText.slice(8)}`;
    }

    setTextInput(displayText);

    if (formattedText.length === 10 && formattedText[0] === '0') {
      setMessage('Số điện thoại hợp lệ');
      setTextColor('rgb(0, 255, 0)');
    } else {
      setMessage('Số điện thoại không hợp lệ');
      setTextColor('rgb(255, 0, 0)');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.kbAview}>
        
        <View style={styles.container2} >
          <Text style={styles.txt2}>Nhập số điện thoại</Text>
          <Text></Text>
          <Text>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
          <TextInput 
            style={styles.textf}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            value={textInput}
            onChangeText={handleTextChange}
          />
          <Text style={{ color: textColor }}>{message}</Text>
        </View>
        <Button title="Tiếp tục" style ={styles.buttonCustom} onPress={handlePress} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.container1}>
        <Image source={require('./assets/Img/R.png')} style={{ width: 200, height: 200 }} />
        <Text style={styles.txt1}>Welcome to Home Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerTitleAlign: 'center', // Căn giữa tiêu đề của màn hình
            }}
      >
        <Stack.Screen name="Home" alignItems = 'center' component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  kbAview: {
    flex: 1,
  },
  container1: {
    alignItems: 'center',
    marginTop: 20,
  },
  txt1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container2: {
    padding: 16,
  },
  txt2: {
    fontSize: 18,
  },
  textf: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonCustom: {
    backgroundColor: 'rgb(0,0,0)',
    color: 'white',
    padding: 10,
  }
});