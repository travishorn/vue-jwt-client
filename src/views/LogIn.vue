<template>
  <form>
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" class="form-control" autofocus v-model="username">
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" class="form-control" type="password" v-model="password">
    </div>

    <button class="btn btn-primary" @click.prevent="logIn">Log in</button>
  </form>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch('logIn', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
