import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

export default {
  async getUsers() {
    try {
      const response = await axios.get(`${API_URL}?results=50`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching users:', error.response || error);
      throw new Error('Error fetching users from Random User API');
    }
  },

  async getUserById(id) {
    try {
      const response = await axios.get(`${API_URL}?id=${id}`);
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null;
    }
  },
};
