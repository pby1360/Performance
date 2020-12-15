<template>
  <div>
    <p>{{ message }}</p>
    <router-link to="/main">Main</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: '',
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/home', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset = utf-8',
        },
      });
      this.message = await response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>

</style>
