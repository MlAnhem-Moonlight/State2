import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  ActivityIndicator,
  RefreshControl,
  Alert
} from 'react-native';
import { userService } from '../api/userService';

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Sử dụng service để lấy dữ liệu
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Không thể tải danh sách người dùng');
      Alert.alert('Lỗi', err.message || 'Không thể tải danh sách người dùng');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    
    // Đăng ký sự kiện lắng nghe khi quay lại màn hình này
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUsers();
    });
    
    return unsubscribe;
  }, [navigation]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  const handleUserPress = (userId) => {
    navigation.navigate('UserDetail', { userId });
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.userCard}
      onPress={() => handleUserPress(item.id)}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Website: {item.website}</Text>
      <Text>Company: {item.company.name}</Text>
    </TouchableOpacity>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchUsers}>
            <Text style={styles.retryButtonText}>Thử lại</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View style={styles.emptyList}>
              <Text>Không có người dùng nào</Text>
            </View>
          ) : null
        }
      />
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddUser')}
      >
        <Text style={styles.addButtonText}>+ Thêm người dùng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  userCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  errorText: {
    color: '#d32f2f',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});

export default UserListScreen;