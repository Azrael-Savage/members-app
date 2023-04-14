<!-- components/SearchBar.vue -->
<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @input="handleSearch"
      placeholder="Search by first or last name..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>
