import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router';
import Im from '@/im/im'
Vue.config.productionTip = false
Vue.prototype.$socket = new Im('http://127.0.0.1:7001',{
  query:{
    userId:`client_${Math.random()}`,
    room:'demo'
  }
}).init()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
