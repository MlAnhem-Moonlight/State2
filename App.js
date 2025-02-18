import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, ScrollView, TextInput, KeyboardAvoidingView, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textInput,settextInput] = useState('');
  const [message, setMessage] = useState('');
  const [textColor, settextColor] = useState('rgb(255, 0, 0)');

  const handlePress = () => {
    if(textInput.length != 0)
    {
      if (/^\d+$/.test(textInput) && textInput.length === 10 && textInput[0] ==='0') {
        
        Alert.alert('SUCCESS','ĐÃ TẠO TÀI KHOẢN')
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
    if(text.length != 0)
    {
      if (/^\d+$/.test(text) && text.length === 10 && text[0] ==='0') {
        setMessage('Số điện thoại hợp lệ');
        settextColor('rgb(0, 255, 0)');
      } else {
        setMessage('Số điện thoại không hợp lệ');
        settextColor('rgb(255, 0, 0)');
      }
    }
    else setMessage('');
  }

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={styles.kbAview}>
      <View style={styles.container1}>
        <Text style={styles.txt1}>Đăng nhập</Text>
      </View>
      <View style={styles.container2} >
        <Text style={styles.txt2}>Nhập số điện thoại</Text>
        <Text></Text>
        <Text>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
        <TextInput 
          style={styles.textf}
          placeholder="Nhập số điện thoại"
          keyboardType = "phone-pad"
          value={textInput}
          onChangeText={handleTextChange}
        />
        <Text style={[styles.msg,{color : textColor,}]}>{message}</Text>
      </View>
      <Button 
        title ="Tiếp tục"
        onPress={handlePress} 
      
      />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  kbAview:{
    flex:1,
    position:'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'top',
    top: 13,    
    bottom: 22,
    width: '100%',
    height: '100%',
    left:5,
  },
  container: {
    flex: 1,
    position:'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'top',
    top: 10,    
    bottom: 22,
    width: '100%',
    height: '100%',
  },
  container1: {
    flex: 0.2,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'top',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  container2: {
    flex: 0.4,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'top',
    width: '100%',
  },
  img1:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textf:{
    backgroundColor:'white',
    width:'70%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  txt1:{
    fontSize:30,
  },
  txt2:{
    fontSize:20,
  },
  msg:{
    fontSize:15,
    
  }
});
