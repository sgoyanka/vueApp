<template>
  <div>
    <table class="table">
  		<thead>
    		<tr>
     			<th>name</th>
     			<th>Email</th>
    		</tr>
  		</thead>
  		<tbody>
				<tr v-for="(user, index) in users">
       		<td>{{ user.name }}</td>   
       		<td>{{ user.email }}</td>
       		<button v-on:click="removeData(index)" class="btn btn-warning btn-lg">Delete</button>        
          <router-link :to="`/users/${user.id}`">
            <button class="btn btn-warning btn-lg">Edit</button>
          </router-link>
         
       		
				</tr>
				 <router-link to="/create" >
            <button class="btn btn-warning btn-lg">Add Data</button>
          </router-link>
			</tbody>
		</table>
  </div>

</template>     
<script >

  export default {
    name : 'Formdata',
    data () {
      return {
        users : [] 
      }
    },
   created () {
    this.users = this.$store.state.users;
   },
    methods : {
      

      removeData (index) {
        let result = confirm("Are you sure You want to delete your data");
        if(result) {
          this.$store.dispatch('remove', {
            index: index
          });
        }
      },
      
      
    }
  }
</script>