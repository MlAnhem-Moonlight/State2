import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
const Number = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber || '');

  const handleNumberPress = (number) => {
    if (phoneNumber.length < 10) { // Giới hạn tối đa 10 số
      setPhoneNumber(phoneNumber + number);
    }
  };

  const handleBackspacePress = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const handleNextPress = () => {
    const phoneRegex = /^[0-9]{9,10}$/; // Chỉ chấp nhận 9-10 chữ số
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert("Lỗi", "Vui lòng nhập số điện thoại hợp lệ!");
      return;
    }
    navigation.navigate('Verification', { phoneNumber });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="chevron-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Enter your mobile number</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/flag.png')}
            style={styles.flag}
            resizeMode="contain"
          />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            editable={false}
            keyboardType="phone-pad"
          />
        </View>
            <View style={styles.keyboard}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('1')}>
              <Text style={styles.keyText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('2')}>
              <Text style={styles.keyText}>2</Text>
              <Text style={styles.keySubText}>ABC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('3')}>
              <Text style={styles.keyText}>3</Text>
              <Text style={styles.keySubText}>DEF</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('4')}>
              <Text style={styles.keyText}>4</Text>
              <Text style={styles.keySubText}>GHI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('5')}>
              <Text style={styles.keyText}>5</Text>
              <Text style={styles.keySubText}>JKL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('6')}>
              <Text style={styles.keyText}>6</Text>
              <Text style={styles.keySubText}>MNO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('7')}>
              <Text style={styles.keyText}>7</Text>
              <Text style={styles.keySubText}>PQRS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('8')}>
              <Text style={styles.keyText}>8</Text>
              <Text style={styles.keySubText}>TUV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('9')}>
              <Text style={styles.keyText}>9</Text>
              <Text style={styles.keySubText}>WXYZ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('+')}>
              <Text style={styles.keyText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('0')}>
              <Text style={styles.keyText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={handleBackspacePress}>
              <Icon name="backspace-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Icon name="chevron-forward-circle" size={60} color="#53B175" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1, 
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',  
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    color: '#000',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  key: {
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  keyText: {
    fontSize: 24,
  },
  keySubText: {
    fontSize: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 300, 
    right: 20, 
  },
});

export default Number;