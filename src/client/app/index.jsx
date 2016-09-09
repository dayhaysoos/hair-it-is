import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header/Header.jsx';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));