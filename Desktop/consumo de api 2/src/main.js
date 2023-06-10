import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import axios from 'axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue).use(axios)
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
