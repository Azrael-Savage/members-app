import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

let usersCache = null;

export default {
  async getUsers() {
    if (!usersCache) {
      try {
        const response = await axios.get(`${API_URL}?results=56`);
        usersCache = response.data.results;
      } catch (error) {
        console.error('Error fetching users:', error.response || error);
        throw new Error('Error fetching users from Random User API');
      }
    }
    return usersCache;
  },

  async getUserById(id) {
    if (!usersCache) {
      await this.getUsers();
    }

    const user = usersCache.find((user) => user.login.uuid === id);

    if (!user) {
      console.error('User not found by ID:', id);
      return null;
    }

    return user;
  },
};
