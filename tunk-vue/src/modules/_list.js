import {create, action} from 'tunk';


export default class list {
  constructor(){
    console.log('init list');
    this.state = {
      list:[]
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

