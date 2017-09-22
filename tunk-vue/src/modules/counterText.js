import {create, action} from 'tunk';


@create('counterText', {isolate:'deep'})
class counterText {
  //不允许异步，应该保持简单
  constructor(){
    this.state = {
      text: 'hello world'
    };
  }
  
  @action
  setText(n){
    return {text: this.getText()[n % 4]};
  }

  //@watch('counter.count')
  watchCount(n){
    this.setText(n);
    // setTimeout(()=>{
    //   this.dispatch('counter.increment');
    // },2000);
  }

  getText(){
    return {
      0: 'hello world',
      1: 'i am robert',
      2: 'just do IT',
      3: 'i love you'
    }
  }
}

