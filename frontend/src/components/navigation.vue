<template>
  <div class="nav">
    <div>PERFORMANCE</div>
    <ul
      v-for="(item, index) in navData"
      :key="index"
    >
      <!-- {{ item.name }} -->
      <li><router-link :to="item.path">{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import router from '../router';

export default {
  data() {
    return {
      navData: router.options.routes,
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #333;
  color: white;
}
</style>
