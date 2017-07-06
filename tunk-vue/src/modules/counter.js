import {create, action} from 'tunk';
import _list from './_list';

@create
export default class counter extends _list {
  //不允许异步，应该保持简单
  constructor(){
    super();
    this.state = {
      count:0
    };
  }

  @action
  decrement(){
    return {count:this.state.count - 1};
  }

  @action
   async incrementIfOdd() {
    if ((this.state.count + 1) % 2 === 0) {
      const count = await this.incrementAsync();
      return {count};
    }
  }

  @action
  async incrementAsync(){
    const connt = await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.dispatch('increment');
        resolve(this.state.count);
      }, 1000);
    });
    return {connt};
    
  }


  getStateOfOtherClass(){
    this.getState('counterText');
  }

}

console.log({counter});

