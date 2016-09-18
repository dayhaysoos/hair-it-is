import React from 'react';
import Navigation from './Navigation/Navigation.jsx';

class App extends React.Component {
	render () {
		return (
			<div className="main-container">
			<Navigation />
			{this.props.children}
			</div>
			)
	}
}

export default App;