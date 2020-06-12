import React from 'react';
import '../App.css';
import logo from '../media/smarso_logo.png';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import About from './components/About.js';
// import Skills from './components/Skills.js';
// import Portfolio from './components/Portfolio.js';

class Header extends React.Component {
	clickedLinked(e) {
		const active = e.target.classList.contains('active');
		if (!active) {
			var header = document.getElementById('header-nav');
			let links = header.getElementsByTagName('a');
			for (var i = 0; i < links.length; i++) {
				links[i].classList.remove('active');
				e.target.classList.add('active');
			}
		}
	}
	render() {
		return (
			<div className="container-fluid header-container">
				<div className="row">
					<div className="col-md-12 p-0">
						<header className="header">
							<Navbar collapseOnSelect expand="lg" bg="" variant="light">
								<Nav />
								<Navbar.Brand href="/">
									<img src={logo} alt="logo" className="logo-img" />
								</Navbar.Brand>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto" />
									<Nav id="header-nav">
										<Link to="/" onClick={this.clickedLinked} className="active">
											Home
										</Link>
										<Link to="/about" onClick={this.clickedLinked}>
											About
										</Link>
										<Link to="/skills" onClick={this.clickedLinked}>
											Skills
										</Link>
										<Link to="/portfolio" onClick={this.clickedLinked}>
											Portfolio
										</Link>
									</Nav>
									<Nav />
								</Navbar.Collapse>
							</Navbar>
						</header>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
