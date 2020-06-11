import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './Footer.js';
import HomePage from './components/HomePage.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Portfolio from './components/Portfolio.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <div className="header-container">
                        <Header />
                    </div>
                    <Switch>
                        <Route exact path={ process.env.PUBLIC_URL + '/'} component={HomePage} />
                        <Route  path={process.env.PUBLIC_URL + '/about'} component={About} />
                        <Route  path={process.env.PUBLIC_URL + '/skills'} component={Skills} />
                        <Route  path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} />
                    </Switch>
                    <div className="footer-container">
                        <Footer />
                    </div>
             </Router>
            </>
        );
    }
}

export default Home;
