import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { userService } from '../api/userService';

const UserDetailScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Sử dụng service để lấy chi tiết người dùng
        const userData = await userService.getUserById(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message || 'Không thể tải thông tin người dùng');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Đang tải thông tin...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retryButtonText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.centered}>
        <Text>Không tìm thấy thông tin người dùng</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retryButtonText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Thông tin người dùng</Text>
        
        <View style={styles.section}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{user.id}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.label}>Tên:</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.label}>Tên người dùng:</Text>
          <Text style={styles.value}>{user.username}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.label}>Số điện thoại:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.label}>Website:</Text>
          <Text style={styles.value}>{user.website}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Địa chỉ</Text>
          <Text>{user.address.street}, {user.address.suite}</Text>
          <Text>{user.address.city}, {user.address.zipcode}</Text>
          <Text>Geo: {user.address.geo.lat}, {user.address.geo.lng}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Công ty</Text>
          <Text style={styles.companyName}>{user.company.name}</Text>
          <Text>{user.company.catchPhrase}</Text>
          <Text>{user.company.bs}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    color: '#d32f2f',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default UserDetailScreen;
