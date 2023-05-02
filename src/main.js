// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHead from 'vue-head'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueHead)
export default {
  name: 'App',
  head: {
    metaInfo: {
      link: [
        { rel: 'icon', href:'./src/assets/copium.png' }
      ]
    }
  }
}

