import {create, action} from 'tunk';
import _list from './_list';
import {sleep, until, delay} from 'tunk-delay';

@create
class counter extends _list {
  //不允许异步，应该保持简单
  constructor(){
    super();
    this.state = {
      count:0
    };
  }

  @action
  async decrement(){
    const ok = await delay('22', 2000);
    if(ok) return {count:this.state.count - 1};
  }

  @action
  async incrementIfOdd() {
    if ((this.state.count + 1) % 2 === 0) {
      const {count} = await this.incrementAsync();
      return {count};
    }
  }

  @action
  async incrementAsync(){
    const count = await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.dispatch('increment');
        resolve(this.state.count);
      }, 1000);
    });
    return {count:count+'-'};
  }


  getStateOfOtherClass(){
    this.getState('counterText');
  }

}

console.log({counter});

