import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { userService } from '../api/userService';

const AddUserScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [username, setUsername] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên');
      return false;
    }
    if (!email.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập email');
      return false;
    }
    // Kiểm tra định dạng email đơn giản
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Lỗi', 'Email không đúng định dạng');
      return false;
    }
    if (!username.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên người dùng');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const newUser = {
        name,
        email,
        phone,
        website,
        username,
        company: {
          name: companyName
        },
        // Thêm các trường mặc định để tránh lỗi
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '0',
            lng: '0'
          }
        }
      };
      
      // Sử dụng service để thêm người dùng mới
      const result = await userService.addUser(newUser);
      
      Alert.alert(
        'Thành công', 
        `Người dùng ${result.name} đã được thêm với ID: ${result.id}`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('UserList')
          }
        ]
      );
      
    } catch (err) {
      setError(err.message || 'Không thể thêm người dùng');
      Alert.alert('Lỗi', err.message || 'Không thể thêm người dùng');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          <Text style={styles.label}>Tên *</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nhập tên người dùng"
          />

          <Text style={styles.label}>Tên người dùng *</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Nhập username"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Nhập email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Website</Text>
          <TextInput
            style={styles.input}
            value={website}
            onChangeText={setWebsite}
            placeholder="Nhập website"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Tên công ty</Text>
          <TextInput
            style={styles.input}
            value={companyName}
            onChangeText={setCompanyName}
            placeholder="Nhập tên công ty"
          />

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.submitButtonText}>Thêm người dùng</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 15,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  errorText: {
    color: '#d32f2f',
  }
});

export default AddUserScreen;