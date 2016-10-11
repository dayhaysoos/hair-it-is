import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
	render() {
		return (
			<nav className="row">
				<div className="title large-7 columns">Hair It Is!</div>
				<div className="large-5 columns">
					<div className="row">
						<Link to={'/'} className="large-3 columns">Home</Link>
						<Link to={'/cuts'} className="large-3 columns">Cuts</Link>
						<Link to={'/gallery'} className="large-3 columns">Gallery</Link>
						<Link to={'/contact'} className="large-3 columns">Contact</Link>
					</div>
				</div>
			</nav>
			)
	}
}

// class Navigation extends React.Component {

// 	render() {
// 		return (
// 			<div className="nav-container">
// 				<div className="nav-header">
// 					<div className="nav-brand">
// 				 		<a href="/">Hair It Is!</a>
// 					</div>
// 				</div>
// 				<div className="nav-items">
// 					<div className="nav-item"><a href="/">Home</a></div>
// 					<div className="nav-item"><a href="about">About</a></div>
// 					<div className="nav-item"><a href="gallery">Gallery</a></div>
// 					<div className="nav-item"><a href="cuts">Cuts</a></div>
// 					<div className="nav-item"><a href="contact">Contact</a></div>
// 				</div>
// 			</div>
// 			)
// 	}	
// }

export default Navigation;