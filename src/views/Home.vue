<template>
  <div>
    <h2>My pets</h2>
    <ul class="list-unstyled">
      <li v-for="pet in pets" :key="pet.name">
        {{ pet.species | emoji }} {{ pet.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  filters: {
    emoji(species) {
      switch (species) {
        case 'cat':
          return '🐱';
        case 'dog':
          return '🐶';
        default:
          return species;
      }
    },
  },
  computed: {
    pets() { return this.$store.getters.pets; },
  },
  mounted() {
    this.$store.dispatch('getPets');
  },
};
</script>
