<template>
  <div class="profile-container">
    <div v-if="user" class="profile-content">
      <h1>Profile</h1>
      <img
        :src="user.picture.large"
        alt="Profile picture"
        class="profile-picture"
      />
      <h2>{{ user.name.first }} {{ user.name.last }}</h2>
      <p>{{ user.location.street.number }} {{ user.location.street.name }}</p>
      <p>
        {{ user.location.city }}, {{ user.location.state }}
        {{ user.location.postcode }}
      </p>
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
import userService from "@/services/userService";

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
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
      }
      return "";
    },
  },
  async mounted() {
    const userId = this.$route.params.id;
    console.log(userId);
    this.user = await userService.getUserById(userId);
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-style: groove;
  background-image: url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-color: aliceblue;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: rgb(251, 251, 251);
  border-style: groove;
  background-color: rgb(191, 191, 191);
  border-color: rgb(41, 2, 2);
}

.profile-picture {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}

.profile-content p {
  margin: 5px 0;
}
</style>
