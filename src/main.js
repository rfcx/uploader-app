import Vue from 'vue'
import App from './App.vue'
import createDb from './electron/backgroundWindow/db'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate: async function () {
    Vue.prototype.$db = await createDb()
  }
}).$mount('#app')
