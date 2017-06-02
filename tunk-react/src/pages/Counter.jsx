import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'tunk-react'
import ReactDOM from 'react-dom';
import '../modules/counter';
import '../modules/counterText';

@connect
class Btn extends Component {

  static propType = {
    count: PropTypes.number.isRequired
  }

  decrement(){
    this.dispatch('counter.decrement');
  }

  render() {
    console.log(this);
    return (
        <button onClick={this.decrement.bind(this)}>-</button>
    )
  }
}


@connect(['counter', 'counterText'],{
  c:'counter',
})
export default class Counter extends Component {

	componentWillReceiveProps(props) {
		const el = ReactDOM.findDOMNode(this.refs.btn1);
		console.log('ReactDOM',{el});
	}

  increment__(){
    this.dispatch('counter.increment');
  }

  render() {

    const { counter:{count}, counterText:{text}} = this.props;

    const { c_increment, c_incrementIfOdd, c_incrementAsync, c_decrement} = this;

    return (
      <p>
        Clicked: {count}  times
        {' '}
        <button ref='btn1' onClick={this.increment__.bind(this)}>+</button>
        {' '}
        <Btn/>
        {' '}
        <button onClick={c_incrementIfOdd}> incrementIfOdd </button>
        {' '}
        <button onClick={() => c_incrementAsync()}>Increment async</button>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        {text}
        <br/><br/><br/><br/><br/><br/><br/>
      </p>
    )
  }
}
