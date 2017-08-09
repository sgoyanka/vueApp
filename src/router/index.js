import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import FormComponent from '../form.vue'
import FormData from '../formData.vue'
import App from '../app.vue'

Vue.use(Router)
var data = App.data();
export default new Router({

  routes: [
    {
      path: '/',
      component: FormData,
      props : true
    },
    {
      path: '/create',
      component: FormComponent,
      props : true
    },
    {
      path: '/users/:id',
      component: FormComponent,
      props : true
    },
    {
      path: '/users',
      component: FormData,
      props : true
    }
  ]
})