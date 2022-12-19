import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)