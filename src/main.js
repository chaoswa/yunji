import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Carousel,CarouselItem,Progress,Breadcrumb,BreadcrumbItem} from 'element-ui';

Vue.use(Carousel).use(CarouselItem).use(Progress).use(Breadcrumb).use(BreadcrumbItem);

import './common/less/reset.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
