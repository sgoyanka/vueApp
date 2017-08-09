<template>
	<router-view ></router-view>		
</template>

<script>
	import FormComponent from './form.vue'
	import FormData from './formData.vue'
	
	export default {
		
	 	components : {
  		FormComponent,
  		FormData
  	}
	}
	  
</script>

<style>
</style>