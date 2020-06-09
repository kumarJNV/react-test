import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import logo from '../media/smarso_logo.png';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="container-fluid d-flex">
                        <div className="col-md-3">
                            <Button variant="link logo-btn">
                                <img src={logo} alt="logo" className="logo-img"></img>
                            </Button>
                        </div>
                        <div className="col-md-8">
                            <div className="menu-content">
                                <Nav className="justify-content-end" activeKey="/home">
                                    <Nav.Item>
                                        <Nav.Link href="/home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Skills</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
