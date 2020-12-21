<template>
  <div class="nav">
    <div class="logo">
      <img src="../asset/Performance_logo5.png" width="60" /><span>PERFORMANCE</span>
    </div>
    <ul>
      <li
        v-for="(item, index) in navData"
        :key="index"
        @click="$router.push(item.path)"
        :class="{ menuActive: item.path === $route.path }"
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
      isActive: true,
    };
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
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
    // li:has(a.rounter-link-exact-active) {
    //   background-color: #505050;
    // }
    // 자식 태그 활성화 시 부모 배경색 변경
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  padding: 2rem 0;
  font-weight: bold;
  background-color: #22609D;
  color: white;
  text-align: center;
}

.menuActive {
  background-color: #505050;
}

</style>
