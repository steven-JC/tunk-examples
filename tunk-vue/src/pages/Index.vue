<template>
<section>
	<ul>
		<li v-for="item in route"> <router-link :to="item.path"> {{item.text}} </router-link> </li>
	</ul>
	<section>
		<slot></slot>
	</section>
</section>
</template>

<script>
import route from './route';
export default {
	data: function(){
		return {route};
	},
}
</script>
