<template>
  <div>
  	APP   <router-link to="/counter">Go to Counter</router-link>
  </div>
</template>

<script>
	export default {
		created(){
			console.log('APP');
		},
	}
</script>
