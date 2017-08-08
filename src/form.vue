<template>
  <div>
    <form >
      <div class="form-group">
        <label>Username</label>
  	    <input type="text" class="form-control" v-model="username" >
  	    <p>{{ err.username }}</p>
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
      username: this.obj.username,
      email: this.obj.email,
      password: this.obj.password,
      flag: {
          username: false,
          email: false,
          password: false
      },
      err: {
        username: "",
        email: "",
        password: ""
      },
      obj1: {},
      button: "Signup"
    }
  },
  created () {
    console.log(this.obj.id);
    if(this.obj.id > -1) {
        this.flag.username = true;
        this.flag.password = true;
        this.flag.email = true;
        this.button = "Update";
        this.obj1 = this.obj;
      } else {
        this.flag.username = false;
        this.flag.email = false;
        this.flag.password = false;
        this.button = "Signup";
      }
  },
  
  watch: {
    
    username(val, oldVal) {
      if (/^[" "]*$/.test(val)) {
        this.err.username = 'value entered is incorrect'
        this.flag.username = false 
      } else {
        this.err.username = 'correct value'
        this.flag.username = true
        
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
      if (this.flag.username && this.flag.email && this.flag.password) {
        this.obj1.username = this.username;
        this.obj1.email = this.email;
        this.obj1.password = this.password;
       this.newData(this.obj1);

      }
    }


  },
    props :[
       'newData', 'obj'
    ] 
}  

</script>