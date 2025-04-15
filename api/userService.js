const API_URL = 'https://jsonplaceholder.typicode.com';

export const userService = {
  // GET: Lấy danh sách người dùng
  getUsers: async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // GET: Lấy thông tin người dùng theo ID
  getUserById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw error;
    }
  },

  // POST: Thêm người dùng mới
  addUser: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }
};
