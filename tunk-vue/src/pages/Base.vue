<template>
  <page>
    Clicked: {{ counter.count }} : times
    <button @click="counter_increment">+</button>
    <button @click="counter_decrement">-</button>
    <button @click="counter_incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <br/> <br/> {{ counterText.text }}
  </page>
</template>
<style>
  button{border:solid 1px #ccc; background-color: #eee;}
</style>
<script>
'use strict';
export default {
  
  state: ['counter', 'counterText'],
  actions: ['counter'],

  components:{
    page: require('./Index.vue')
  },
	created(){

		console.log(this,this.state, this.props);
	},
  methods:{
		incrementAsync(){
      this.counter_incrementAsync();
			//this.dispatch('counter.incrementAsync');
		}
	}
}
</script>
