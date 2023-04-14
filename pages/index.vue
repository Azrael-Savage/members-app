<!-- pages/index.vue -->
<template>
  <div>
    <h1>Members</h1>
    <SearchBar @search="handleSearch" />
    <div>
      <MemberCard v-for="user in filteredUsers" :key="user.login.uuid" :user="user" />
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService';
import MemberCard from '@/components/MemberCard';
import SearchBar from '@/components/SearchBar';

export default {
  components: {
    MemberCard,
    SearchBar
  },
  data() {
    return {
      users: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
      });
    }
  },
  async mounted() {
    this.users = await userService.fetchUsers();
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    }
  }
};
</script>
