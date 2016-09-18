import React from 'react';
import { Link } from 'react-router';
import Navigation from '../Navigation/Navigation.jsx';
import Footer from '../Footer/Footer.jsx';

class Home extends React.Component {
  render () {
    return (
    	<div className="home-container">
    		<Navigation></Navigation>
    		<Footer></Footer>
    	</div>
    	)
  }
}

export default Home;