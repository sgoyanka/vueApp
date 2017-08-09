<template>
  <div>
    <form >
      <div class="form-group">
        <label>name</label>
  	    <input type="text" class="form-control" v-model="name" >
  	    <p>{{ err.name }}</p>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" v-model="email" >
        <p>{{ err.email }}</p>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" >
        <p>{{ err.password }}</p>
      </div>
      <button @click.prevent="getFormValues" class="btn btn-warning btn-lg" >{{button}}</button>
          
    </form>
  </div>  
</template>

<script >
  export default {
  data () {
    
    return  {
      name: "",
      email: "",
      password: "",
      flag: {
          name: false,
          email: false,
          password: false
      },
      err: {
        name: "",
        email: "",
        password: ""
      },
      user1: {},
      button: "Signup"
    }
  },
  created () {
    console.log(this.$route.params.id);
    if(this.$route.params.hasOwnProperty("id")) {
        this.flag.name = true;
        this.flag.password = true;
        this.flag.email = true;
        this.button = "Update";
        this.user1.id = this.$route.params.id;
        for (var i = 0; i < this.users.length; i++) {
          if(this.users[i].id == this.$route.params.id) {
            this.name = this.users[i].name;
            this.email = this.users[i].email;
            this.password = this.users[i].password;
            break;
          }
        }
      } else {
        this.flag.name = false;
        this.flag.email = false;
        this.flag.password = false;
        this.button = "Signup";
      }
  },
  
  watch: {
    
    name(val, oldVal) {
      if (/^[" "]*$/.test(val)) {
        this.err.name = 'value entered is incorrect'
        this.flag.name = false 
      } else {
        this.err.name = 'correct value'
        this.flag.name = true
        
      }  
    },
    email(val, oldVal) {
      if (!/^[a-zA-Z0-9.!#$&_~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) {
        this.err.email = 'value entered is incorrect' 
        this.flag.email = false
      } else {
        this.err.email = 'correct value'
        this.flag.email = true
        
      }  
    },
    password(val, oldVal) {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(val)) {
        this.err.password = 'value entered is incorrect'
        this.flag.password = false 
      } else {
        this.err.password = 'correct value'
        this.flag.password = true
      }   
    }
  },
  methods: {
    getFormValues () {
      if (this.flag.name && this.flag.email && this.flag.password) {
        this.user1.name = this.name;
        this.user1.email = this.email;
        this.user1.password = this.password;
        
       this.newData(this.user1);

      }
    }


  },
    props :[
       'newData', 'users'
    ] 
}  

</script>