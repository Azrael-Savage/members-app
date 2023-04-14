<template>
  <div class="search-bar">
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

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #2196f3;
  transition: all 0.3s ease-in-out;
}

.search-bar input:focus {
  outline: none;
  border-bottom: 2px solid #ff9800;
}
</style>
