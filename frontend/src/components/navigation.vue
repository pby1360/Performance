<template>
  <div class="nav">
    <div class="logo">
      <span>PERFORMANCE</span>
    </div>
    <ul>
      <li
        v-for="(item, index) in navData"
        :key="index"
        @click="$router.push(item.path)"
      >
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
  methods: {
    click(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #333;
  // color: white;

  ul {
    padding: 0;
    margin: 0;
    li {
      padding: 1rem 1rem 1rem 3rem;
      list-style: none;
      a {
        text-decoration: none;
        color: #c8c8c8;
      }
      a:hover {
        color: white;
      }
      a.router-link-exact-active {
        color: white;
      }
    }
    li:hover {
      background-color: #505050;
    }
    li:has(a.rounter-link-exact-active) {
      background-color: #505050;
    }
  }
}
.logo {
  font-size: 1.5rem;
  padding: 2rem;
  font-weight: bold;
  background-color: #22609D;
  color: white;
  text-align: center;
}

</style>
