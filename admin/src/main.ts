import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './styles.scss'
import router from './router'

import axios from '@/utils/request';

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
