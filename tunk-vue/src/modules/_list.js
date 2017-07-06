import {create, action} from 'tunk';


export default class list {
  
  @action
  increment(){
    return {count:this.addOne()};
  }

  addOne(){
    return this.state.count+1;
  }
}

