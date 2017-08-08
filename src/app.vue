<template>
		<div v-if=loginType>
			<form-component v-bind:newData = "newData" v-bind:user ="user" />
		</div>
		<div v-else>
			<form-data v-bind:users = "users" v-bind:remove = "remove" v-bind:addData = "addData" v-bind:editData = "editData"/>		
		</div>
</template>

<script>
	import FormComponent from './form.vue'
	import FormData from './formData.vue'
	import EditData from './editData.vue'
	export default {
		data () {
			return {
				loginType: true,
      	users : [],
			  id : 0,
			  user : {},
			  index : 0
    	} 
		},
	 	components : {
  		FormComponent,
  		FormData,
  		EditData
  	},
  	methods : {
  		newData (user) {
  			if(!user.hasOwnProperty("id")) {
  		  this.users.push({
          id : this.id,
          name : user.name,
          email : user.email,
          password : user.password
        });
        this.id++;
  			} else {
  				this.users[this.index] = user;
  			}
  			console.log(this.users);
  			this.loginType = false;
  		},
  		remove(index) {
  			this.users.splice(index,1);
  		},
  		addData() {
        this.user = {};
  			this.loginType = true; 
  		},
  		editData(index) {
  			this.index = index;
  			this.user = this.users[index];
  			this.loginType = true;
  		}
  		
  	}
	}
	  
</script>

<style>
</style>