import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory } from 'react-router';
import createBrowserHistory from 'history';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

//import CSS
import CSS from '../assets/styles/main.scss';

 const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route path="about" component={About} />
    	<Route path="contact" component={Contact} />
    </Route>
  </Router>
)

render(router, document.getElementById('app'));