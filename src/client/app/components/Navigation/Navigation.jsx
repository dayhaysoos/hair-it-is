import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {

	render() {
		return ( 
			<Navbar className="nav-container">
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Hair It Is!</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav className="nav-items">
					<LinkContainer to="/">
						<NavItem eventKey={1}>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/about">
						<NavItem eventKey={2}>About</NavItem>
					</LinkContainer>
					<NavItem eventKey={3} href="#">Gallery</NavItem>
					<NavItem eventKey={4} href="#">Cuts</NavItem>
					<NavItem eventKey={2} href="#">Contact</NavItem>
				</Nav>
			</Navbar>
			)
	}
}

export default Navigation;