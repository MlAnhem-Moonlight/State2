// filepath: /C:/MyFlow/Mobile/m_31_12/screens/LoginScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, Button, Alert } from 'react-native';
import Header from '../components/Header';

const LoginScreen = ({ navigation }) => {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState('');
  const [textColor, setTextColor] = useState('rgb(255, 0, 0)');

    const handlePress = () => {
      if(textInput.length != 0)
      {
        if (/^\d+$/.test(textInput) && textInput.length === 10 && textInput[0] ==='0') {
          
          Alert.alert('SUCCESS','CHÀO MỪNG ĐẾN VỚI HỆ THỐNG')
        } 
        else 
        {
          Alert.alert('ERROR','SỐ ĐIỆN THOẠI KHÔNG TỒN TẠI HOẶC KHÔNG HỢP LỆ')
          
        }
      }
      else 
      {
        Alert.alert('ERROR','VUI LÒNG NHẬP SỐ ĐIỆN THOẠI')
      }
    }
  
    const handleTextChange = (text) => {
      settextInput(text);
      const fommatedText = text.replace(/[^\d]/g, '');
  
      let displaceText = fommatedText;
  
      if(text.length != 0)
      {
        if (/^\d+$/.test(text) && text.length === 10 && text[0] ==='0') {
          setMessage('Số điện thoại hợp lệ');
          settextColor('rgb(0, 255, 0)');
        } else {
          setMessage('Số điện thoại không hợp lệ');
          settextColor('rgb(255, 0, 0)');
        }
        if(fommatedText.length > 4) 
          displaceText = `${fommatedText.slice(0,4)} ${fommatedText.slice(4)}`;
        if(fommatedText.length > 7) 
          displaceText = `${displaceText.slice(0,8)} ${displaceText.slice(8)}`;
        settextInput(displaceText);
      }
      else setMessage('');
  
    }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.kbAview}>
        <Header title="Đăng nhập" iconName="ios-menu" onIconPress={() => Alert.alert('Icon Button Pressed')} />
        <View style={styles.container2} >
          <Text style={styles.txt2}>Nhập số điện thoại</Text>
          <Text></Text>
          <Text>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
          <TextInput 
            style={styles.textf}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            value={textInput}
            onChangeText={(text) => handleTextChange(text, setTextInput, setMessage, setTextColor)}
          />
          <Text style={{ color: textColor }}>{message}</Text>
        </View>
        <Button title="Tiếp tục" onPress={() => handlePress(textInput)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  kbAview: {
    flex: 1,
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
});

export default LoginScreen;