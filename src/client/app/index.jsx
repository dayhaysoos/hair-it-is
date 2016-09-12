import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory } from 'react-router';
import Home from './components/Home/Home.jsx';

//import CSS
import CSS from '../assets/styles/main.scss';


 const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
)

render(router, document.getElementById('app'));