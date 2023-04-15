<template>
  <v-col cols="12" sm="4" md="3" lg="2">
    <v-card class="member-card" elevation="2">
      <v-img :src="user.picture.thumbnail" alt="User thumbnail" height="150" contain></v-img>
      <v-card-title class="text-center">{{ user.name.first }} {{ user.name.last }}</v-card-title>
      <v-card-subtitle class="text-center">{{ user.location.city }}, {{ user.location.country }}</v-card-subtitle>
      <v-card-text>
        <p>Age: {{ user.dob.age }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text :to="{ name: 'profile-id', params: { id: user.login.uuid } }">View Profile</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.member-card {
  margin-bottom: 20px;
  border-style: groove;
  border-color: aliceblue;
}

.member-card .v-card__title {
  font-size: 1rem;
}

.member-card .v-card__subtitle {
  font-size: 0.8rem;
}

/* animation */
.member-card-enter-active,
.member-card-leave-active {
  transition: all 0.5s;
}

.member-card-enter,
.member-card-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
