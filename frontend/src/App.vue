<template>
  <div id="app">
    <div class="nav">
      <navigation />
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';

export default {
  name: 'App',
  components: {
    navigation,
  },
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  height: 100%;
}
.nav {
  flex: 2;
  height: 100%;
}
.view{
  flex: 8;
}
</style>
