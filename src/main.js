import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    users : [{
      id:0,
      name : "shanu",
      email : "abc@w",
      password : "Dajshb@1233"
    }],
    id : 1,
    index : 0
  },
  mutations: {
    newData (state, user) {
      console.log("c");
      if(!user.user.user.hasOwnProperty("id")) {
        state.users.push({
          id : state.id,
          name : user.user.user.name,
          email : user.user.user.email,
          password : user.user.user.password
        });
        state.id++;
      } else {
        for (var i = 0; i < state.users.length; i++) {
          if(state.users[i].id == user.user.user.id) {
            state.users[i].name = user.user.user.name;
            state.users[i].email = user.user.user.email;
            state.users[i].password = user.user.user.password;
            break;
          }
        }
      }
      console.log(state.users);
      window.location = "/#/";
    },
    remove (state, index) {
      state.users.splice(index.index.index,1);
    }
  },
  actions: {
    newData (context, user) {
      console.log("a");
      context.commit('newData', {
        user : user
      });
    },
    remove (context, index) {
      console.log("b");
      context.commit('remove', {
        index : index
      });
    }
  }
});

Vue.component('app', App)
  
new Vue({
  el: '#divid',
  router,
  store,
  template: '<App/>',
  components: { App }
 
})