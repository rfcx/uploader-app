import Vue from 'vue'
import App from './App.vue'
import createDb from './electron/backgroundWindow/db'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate: async function () {
    Vue.prototype.$db = await createDb()
  }
}).$mount('#app')
