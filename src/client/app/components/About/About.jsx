import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
	render () {
		return (
			<div className="about-container">
				<h1 className="about">About Page</h1>
				<Link to="/">Home</Link>
			</div>
			)
	}
}

export default About;