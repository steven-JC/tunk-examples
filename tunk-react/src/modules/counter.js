import {create, action} from 'tunk';
import list from "./_list";

@create('counter', {isolate:'deep'})
export default class counter extends list {
  //不允许异步，应该保持简单
  constructor(){
    super();
  }
  @action
  decrement(){
    return {count:this.state.count-1};
  }

  @action
  incrementIfOdd() {
    if ((this.state.count + 1) % 2 === 0) {
      this.increment();
    }
  }

  @action
  incrementAsync(){
    setTimeout(() => {
      this.dispatch('increment');
    }, 1000)
  }
}

