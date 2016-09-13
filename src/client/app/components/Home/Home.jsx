import React from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

class Home extends React.Component {
  render () {
    return (
    	<div className="main-container">
    		<Header></Header>
    		<Link to="/about">About</Link>
    		<Footer></Footer>
    	</div>
    	)
  }
}

export default Home;