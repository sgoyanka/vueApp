<template>
	<router-view v-bind:users="users" v-bind:remove="remove" v-bind:addData="addData" v-bind:editData="editData" v-bind:newData="newData" v-bind:user="user"></router-view>		
</template>

<script>
	import FormComponent from './form.vue'
	import FormData from './formData.vue'
	
	export default {
		data () {
			return {
				loginType: true,
      	users : [{
          id:0,
          name : "shanu",
          email : "abc@w",
          password : "Dajshb@1233"
        }],
			  id : 1,
			  user : {},
			  index : 0
    	} 
		},
	 	components : {
  		FormComponent,
  		FormData
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
  			window.location = "/#/"
  		},
  		remove(index) {
  			this.users.splice(index,1);
  		},
  		addData() {
        this.user = {};
  			window.location = "/#/create";
  		},
  		editData(index) {
  			this.index = index;
  			this.user = this.users[index];
  			window.location = "/#/users/" + this.user.id; 
  		}
  		
  	}
	}
	  
</script>

<style>
</style>