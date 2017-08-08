<template>
		<div v-if="loginType === 'signup' || loginType === 'editData'">
			<form-component v-bind:newData = "newData" v-bind:obj ="obj" />
		</div>
		<div v-else>
			<form-data v-bind:user = "user" v-bind:remove = "remove" v-bind:addData = "addData" v-bind:editData = "editData"/>		
		</div>
</template>

<script>
	import FormComponent from './form.vue'
	import FormData from './formData.vue'
	import EditData from './editData.vue'
	export default {
		data () {
			return {
				loginType: 'signup',
      	user : [],
			  id : 0,
			  obj : {},
			  index : 0
    	} 
		},
	 	components : {
  		FormComponent,
  		FormData,
  		EditData
  	},
  	methods : {
  		newData (obj) {
  			if(!obj.id || obj.id != 0) {
  		  this.user.push({
          id : this.id,
          username : obj.username,
          email : obj.email,
          password : obj.password
        });
        this.id++;
  			} else {
  				this.user[this.index] = obj;
  			}
  			console.log(this.user);
  			this.loginType = "showData";
  		},
  		remove(index) {
  			this.user.splice(index,1);
  		},
  		addData() {
  			this.obj = {
  				button: "signup",
  				flag : {
  					username : false,
			  		email : false,
			  		password : false
  				}
  			};
  			this.loginType = "signup"; 
  		},
  		editData(index) {
  			this.index = index;
  			this.obj = this.user[index];
  			//console.log(this.obj);
  			this.loginType = "editData";
  		}
  		
  	}
	}
	  
</script>

<style>
</style>