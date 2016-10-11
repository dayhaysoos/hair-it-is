import React from 'react';
import Navigation from './Navigation/Navigation.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
	render () {
		return (
			<div className="main-container">
			<Navigation />
			{this.props.children}
			<Footer />
			</div>
			)
	}
}

export default App;