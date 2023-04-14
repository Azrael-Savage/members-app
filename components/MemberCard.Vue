<template>
  <v-card class="member-card" elevation="2">
    <v-img :src="user.picture.thumbnail" alt="User thumbnail" height="200" width="200"></v-img>
    <v-card-title class="text-center">{{ user.name.first }} {{ user.name.last }}</v-card-title>
    <v-card-text>
      <p>Age: {{ user.dob.age }}</p>
    </v-card-text>
    <v-card-actions class="d-flex align-center" style="height: 64px">
      <v-btn color="primary" text :to="`/profile/${user.login.uuid}`">View Profile</v-btn>
    </v-card-actions>
  </v-card>
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
  max-width: 200px;
  margin: 10px;
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

@media only screen and (min-width: 768px) {
  .members-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .member-card {
    flex: 1 1 200px;
    margin: 10px;
  }

  .member-card .v-card-actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
