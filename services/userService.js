import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

export default {
  async getUsers() {
    try {
      const response = await axios.get(`${API_URL}?results=56`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching users:', error.response || error);
      throw new Error('Error fetching users from Random User API');
    }
  },

  async getUserById(id) {
    try {
      const response = await axios.get(`${API_URL}?results=56`);
      const users = response.data.results;
      const user = users.find((user) => user.login.uuid === id);

      return user;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null;
    }
  },
};
