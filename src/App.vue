<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>My app</h1>
        <error-message/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'app',
  components: {
    ErrorMessage,
  },
};
</script>
