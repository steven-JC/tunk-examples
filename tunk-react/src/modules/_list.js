import {create, action} from 'tunk';


export default class list {
  //不允许异步，应该保持简单
  constructor(){
    this.state = {
      count:0
    };
  }

  @action
  increment(){
    return {count:this.addOne()};
  }

  addOne(){
    return this.state.count+1;
  }
}

