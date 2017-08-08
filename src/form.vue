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
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      flag: {
          name: false,
          email: false,
          password: false
      },
      err: {
        name: "value entered is incorrect",
        email: "value entered is incorrect",
        password: "value entered is incorrect"
      },
      user1: {},
      button: "Signup"
    }
  },
  created () {
    
    if(this.user.hasOwnProperty("id")) {
        this.flag.name = true;
        this.flag.password = true;
        this.flag.email = true;
        this.button = "Update";
        this.user1 = this.user;
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
       'newData', 'user'
    ] 
}  

</script>