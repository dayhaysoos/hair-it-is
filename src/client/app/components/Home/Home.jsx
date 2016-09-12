import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

class Home extends React.Component {
  render () {
    return (
    	<div className="main-container">
    		<Header></Header>
    		<Footer></Footer>
    	</div>
    	)
  }
}

export default Home;