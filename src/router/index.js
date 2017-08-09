import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import FormComponent from '../form.vue'
import FormData from '../formData.vue'

Vue.use(Router)
export default new Router({

  routes: [
    {
      name : "FormData",
      path: '/',
      component: FormData,
      props : true
    },
    {
      name : "FormComponent",
      path: '/create',
      component: FormComponent,
      props : true
    },
    {
      name : "FormComponent",
      path: '/users/:id',
      component: FormComponent,
      props : true
    },
    {
      name : "FormData",
      path: '/users',
      component: FormData,
      props : true
    }
  ]
})