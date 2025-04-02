import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const VerificationScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleNumberPress = (number) => {
    if (code.length < 4) {
      setCode(code + number);
    }
  };

  const handleBackspacePress = () => {
    setCode(code.slice(0, -1));
  };

  const handleVerify = () => {
    if (code.length === 4) {
      Alert.alert(
        "Thông báo", 
        "Welcome to my app"
      );
      
    }
  };

  const handleResend = () => {
    setCountdown(60);
    setCode('');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="#000" />
        </TouchableOpacity>

        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.subtitle}>Sent to {phoneNumber}</Text>

        <View style={styles.codeContainer}>
          <Text style={styles.codeLabel}>Code</Text>
          <Text style={styles.codeInput}>
            {code.padEnd(4, '_').split('').join(' ')}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {countdown > 0 ? (
            <Text style={styles.resendTextDisabled}>Resend Code in {countdown}s</Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity 
            style={[styles.nextButton, code.length === 4 ? styles.nextButtonActive : {}]} 
            onPress={()=>navigation.navigate('Location')}
            disabled={code.length < 4}
          >
            <Icon name="arrow-forward" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.keyboard}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "backspace"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => item === "backspace" ? handleBackspacePress() : handleNumberPress(item)}
          >
            {item === "backspace" ? (
              <Icon name="backspace-outline" size={30} color="#000" />
            ) : (
              <Text style={styles.keyText}>{item}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    paddingTop: 20, 
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 10 : 20, 
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  codeContainer: {
    marginBottom: 30,
  },
  codeLabel: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  codeInput: {
    fontSize: 28,
    letterSpacing: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    width: "60%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    position: "absolute",
    bottom: 100, 
    left: 20,
    right: 20,
  },
  resendText: {
    color: "#53B175",
    fontSize: 16,
    textAlign: "left",
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 10, 
  },
  key: {
    width: "30%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    borderRadius: 10,
  },
  keyText: {
    fontSize: 24,
  },
});


export default VerificationScreen;
