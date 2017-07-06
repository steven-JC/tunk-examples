import {create, action} from 'tunk';


@create('counter', {isolate:'deep'})
export default class counter {
  //不允许异步，应该保持简单
  constructor(){
    this.state = {
      count:0
    };
  }

  @action
  increment(){
    console.log(this);
    return {count:this.addOne()};
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

  addOne(){
    return this.state.count + 1;
  }

  getStateOfOtherClass(){
    this.getState('counterText');
  }

}

