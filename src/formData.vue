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
       		<button v-on:click="edit(index)" class="btn btn-warning btn-lg">Edit</button>
				</tr>
				<button v-on:click="addNewData" class="btn btn-warning btn-lg">Add Data</button>
			</tbody>
		</table>
  </div>
</template>     
<script >

  export default {
   
    methods : {

      removeData (index) {
        let result = confirm("Are you sure You want to delete your data");
        if(result) {
          this.remove(index);
        }
      },
      addNewData () {
        this.addData();
      },
      edit (index) {
       this.editData(index);
      }
    },
    props :[
      'users', 'remove' , 'addData', 'editData'
    ] 
  }
</script>