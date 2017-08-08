<template>
  <div>
    <table class="table">
  		<thead>
    		<tr>
     			<th>Username</th>
     			<th>Email</th>
    		</tr>
  		</thead>
  		<tbody>
				<tr v-for="(users, index) in user">
       		<td>{{ users.username }}</td>   
       		<td>{{ users.email }}</td>
       		<button v-on:click="remove1(index)" class="btn btn-warning btn-lg">Delete</button>
       		<button v-on:click="edit(index)" class="btn btn-warning btn-lg">Edit</button>
				</tr>
				<button v-on:click="addData1" class="btn btn-warning btn-lg">Add Data</button>
			</tbody>
		</table>
  </div>
</template>     
<script >

  export default {
   
    methods : {

      remove1 (index) {
        let result = confirm("Are you sure You want to delete your data");
        if(result) {
          this.remove(index);
        }
      },
      addData1 () {
        this.addData();
      },
      edit (index) {
       this.editData(index);
      }
    },
    props :[
      'user', 'remove' , 'addData', 'editData'
    ] 
  }
</script>