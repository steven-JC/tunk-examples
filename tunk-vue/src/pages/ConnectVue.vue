<template>
  <div>
    Clicked: {{ count }} : times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <br/> <br/> {{ text }}<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div> 
</template>
  
<script> 
'use strict';
export default {
  replace:true,
  state: {
    counter: 'counter', // 绑定整个模块的状态 this.state.counter.count
    text: 'counterText.text' // 绑定某个模块里面的某个状态 this.state.text
  },
  /*
    state: ['counter', 'counterText'] // 数组形式绑定多个模块的状态 this.state.counter.count
  */
  actions:{
    c: 'counter' // 注入某个模块的所有actions, c为方法前缀 this.c_increment   this.c_decrement this.c_incrementIfOdd
  },

  /*
    actions:['counter'], // 数组形式注入多个模块的所有actions，模块名为前缀,  this.counter_increment   this.counter_decrement this.counter_incrementIfOdd
  */

  created(){
    console.log(this,this.count, this.props);
  },
  methods:{
    incrementAsync(){
      this.dispatch('counter.incrementAsync');
    }
  }
}
</script>

<style scoped>
  .div{color:red;}
  button{border:solid 1px #ccc !important; background-color: #ccc !important;}
</style> 