import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false
import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Page1
    },
    {
      path: "/page2",
      component: Page2
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
