<template>
  <div class="nav">
    <div class="logo">PERFORMANCE</div>
    <ul
      v-for="(item, index) in navData"
      :key="index"
    >
      <li>
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
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
  
  ul {
    li {
      a:hover {}
      a:focus {}
    }
  }
}
.logo {}

</style>
<template>
  <div class="nav">
    <div class="logo">PERFORMANCE</div>
    <ul
      v-for="(item, index) in navData"
      :key="index"
    >
      <li>
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
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
  
  ul {
    li {
      a:hover {}
      a:focus {}
    }
  }
}
.logo {}

</style>
