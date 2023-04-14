<!-- components/MemberCard.vue -->
<template>
  <div>
    <img :src="user.picture.thumbnail" alt="User thumbnail" />
    <h3>{{ user.name.first }} {{ user.name.last }}</h3>
    <p>Age: {{ user.dob.age }}</p>
    <nuxt-link :to="`/profile/${user.login.uuid}`">View Profile</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
