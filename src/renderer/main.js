import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import '@/assets/common.css'
import App from './App'
import router from './router'
import store from './store'
import messages from './i18n'

Vue.use(Buefy)
Vue.use(VueI18n)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'cn', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
