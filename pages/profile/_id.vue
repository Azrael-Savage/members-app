<template>
  <div>
    <h1>Profile</h1>
    <div v-if="user">
      <img :src="user. picture.large" alt="Profile picture" />
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
      <p>{{ user.location.street.number }} {{ user.location.street.name }}</p>
      <p>{{ user.location.city }}, {{ user.location.state }} {{ user.location.postcode }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Date of Birth: {{ formattedDateOfBirth }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService';

export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    formattedDateOfBirth() {
      if (this.user) {
        const date = new Date(this.user.dob.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
      return '';
    },
  },
  async mounted() {
    const userId = this.$route.params.id;
    console.log(userId);
    this.user = await userService.getUserById(userId);
  },
};
</script>
