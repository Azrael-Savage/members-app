<template>
  <div>
    <h1>Members</h1>
    <SearchBar @search="handleSearch" />
    <v-row>
      <member-card
        v-for="user in filteredUsers"
        :key="user.login.uuid"
        :user="user"
        :user-id="user.login.uuid"
        @view-profile="navigateToProfile"
      />
    </v-row>
  </div>
</template>

<script>
import userService from '@/services/userService';
import MemberCard from '@/components/MemberCard';
import SearchBar from '@/components/SearchBar';

export default {
  components: {
    MemberCard,
    SearchBar,
  },
  data() {
    return {
      users: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
      });
    },
  },
  async mounted() {
    this.users = await userService.getUsers();
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    navigateToProfile(userId) {
      this.$router.push({ name: 'profile-id', params: { id: userId } });
    },
  },
};
</script>
<style scoped>
h1{
  display: flex;
  justify-content: center;
  font-size: 50px;
}
</style>
