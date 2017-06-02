import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Counter from './pages/Counter.jsx';

render(
    <Router>    
        <Route path="/" component={Counter}/>
    </Router>
, document.getElementById('root'));
