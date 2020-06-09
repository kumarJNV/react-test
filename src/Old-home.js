import React from 'react';
import './App.css';
import Header from  './components/Header.js';
import Footer from  './Footer.js';
import HomePage from  './components/HomePage.js';
import About from  './components/About.js';
import Skills from  './components/Skills.js';
import Portfolio from './components/Portfolio.js';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


class Home extends React.Component {
    render() {
        return (
            <>
            <div>
                <div className="header-container">
                    <Header />
                </div>
                <section className="homepage-section">
                    <HomePage />
                </section>
                <section className="about-section">
                    <About />
                </section>
                <section className="skill-section">
                    <Skills />
                </section>
                <section className="portfolio-section">
                    <Portfolio />
                </section>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
            {/* <Container fluid>
                <Row style={{background: "blue"}}>
                    <Col><Header /></Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container> */}
            </>
        );
    }
}

export default Home;
