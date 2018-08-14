import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Input } from 'element-ui';

Vue.use(Button).use(Input);

import './common/less/reset.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
