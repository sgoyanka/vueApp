import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import router from './router'

Vue.component('app', App)
  
new Vue({
  el: '#divid',
  router,
  template: '<App/>',
  components: { App }
 
})