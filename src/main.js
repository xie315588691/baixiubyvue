import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/vendors/bootstrap/css/bootstrap.css'
import './assets/css/admin.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
