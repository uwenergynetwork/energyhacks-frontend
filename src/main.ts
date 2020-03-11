import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home/Home.vue';
import Apply from './components/Apply/Apply.vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/style.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/apply', component: Apply },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
