import { create, action } from 'tunk';


@create('async_await', { isolate: 'deep' })
class async_await22 {
  //不允许异步，应该保持简单
  constructor() {
    this.state = {
      count: 0
    };
  }

  @action
  increment() {
    console.log(this);
    return { count: this.addOne() };
  }

  @action
  decrement() {
    return { count: this.state.count - 1 };
  }

  @action
  async incrementIfOdd() {
    if ((this.state.count + 1) % 2 === 0) {
      const count_obj = await this.incrementAsync();
      return count_obj;
    }
  }

  @action
  async incrementAsync() {
    const count = await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.dispatch('increment');
        resolve(this.state.count);
      }, 1000);
    });
    return { count };
  }

  addOne() {
    return this.state.count + 1;
  }
}

