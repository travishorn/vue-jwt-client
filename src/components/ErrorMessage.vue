<template>
  <div v-if="error" class="alert alert-danger">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>
