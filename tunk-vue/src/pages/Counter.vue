<template>
  <div>
    Clicked: {{ counter.count }} : times
    <button @click="counter_increment">+</button>
    <button @click="counter_decrement">-</button>
    <button @click="counter_incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <br/> <br/> {{ counterText.text }}<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>
<style>
  .div{color:red;}
  button{border:solid 1px #ccc; background-color: #eee;}
</style>
<script>
'use strict';
export default {
	replace:true,
  state: ['counter', 'counterText'],
  actions: ['counter'],
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
