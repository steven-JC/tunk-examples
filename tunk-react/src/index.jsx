import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Index';

render(
    <Router>
        <Route path='/' component={Index} />
    </Router>
, document.getElementById('root'));
