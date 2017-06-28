import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Base from './Base';
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: [
        {path: '/', text: 'examples list'},
        {path: '/base', text: 'base usage', component: Base}
      ]
      
    };
  }
  render() {
    return (
      <section>
        <ul>
          {this.state.route.map((it)=>{
            return (<li key={it.path}> <Link to={it.path}>{it.text}</Link></li>);
          })}
        </ul>
        <section>
          {this.state.route.map((it)=>{
            return it.component?(<Route key={it.path} path={it.path} component={it.component}/>):null;
          })}
        </section>
      </section>
    )
  }
}
