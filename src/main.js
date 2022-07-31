import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/route'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Router)

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')



