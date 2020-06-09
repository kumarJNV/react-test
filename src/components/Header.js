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

    scrollHome(e) {
        const active = e.target.classList.contains("active");
        if(!active){
            var header = document.getElementById('header-nav');
            let links = header.getElementsByClassName('nav-link');
            for (var i = 0; i < links.length; i++) {
                    links[i].classList.remove("active");
                    // e.target.className += " active";
                    e.target.classList.add("active");
            }
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    scrollAbout(e) {
        const active = e.target.classList.contains("active");
        if(!active){
            var header = document.getElementById('header-nav');
            let links = header.getElementsByClassName('nav-link');
            for (var i = 0; i < links.length; i++) {
                    links[i].classList.remove("active");
                    // e.target.className += " active";
                    e.target.classList.add("active");
            }
        }
        document.querySelector('.about-section').scrollIntoView({
            block: "center",
            behavior: 'smooth' 
        });
    }
    scrollSkills(e) {
        const active = e.target.classList.contains("active");
        if(!active){
            var header = document.getElementById('header-nav');
            let links = header.getElementsByClassName('nav-link');
            for (var i = 0; i < links.length; i++) {
                    links[i].classList.remove("active");
                    // e.target.className += " active";
                    // console.log(e.target.classList);
                    e.target.classList.add("active");
            }
        }
        document.querySelector('.skill-section').scrollIntoView({
            block: "center",
            behavior: 'smooth' 
        });
    }
    scrollPortfolio(e) {
        const active = e.target.classList.contains("active");
        if(!active){
            var header = document.getElementById('header-nav');
            let links = header.getElementsByClassName('nav-link');
            for (var i = 0; i < links.length; i++) {
                    links[i].classList.remove("active");
                    // e.target.className += " active";
                    e.target.classList.add("active");
            }
        }
        document.querySelector('.portfolio-section').scrollIntoView({
            block: "center",
            behavior: 'smooth' 
        });
    }
    render() {
        return (
            <>
            <div className="container-fluid header-container">
                <div className="row">
                    <div className="col-md-12 p-0">
                    <header className="header">
                        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                            <Nav className="right-gap">
                            </Nav>
                            <Navbar.Brand href="/">
                               <img src={logo} alt="logo" className="logo-img"></img>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <Nav id="header-nav">
                                    <Link to="/" >Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/skills" >Skills</Link>
                                    <Link to="/portfolio" >Portfolio</Link>
                                </Nav>
                                <Nav className="right-gap">
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>
                        </header> 
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Header;
