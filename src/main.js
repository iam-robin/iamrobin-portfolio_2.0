import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueInstagram from 'vue-instagram'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDribbble, faTwitter, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueInstagram)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
