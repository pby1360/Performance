import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;

const baseURL = 'http://localhost:8080';
axios.defaults.baseURL = baseURL;

Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
