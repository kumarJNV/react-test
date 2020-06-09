import React from 'react';
import '../App.css';
import './About.css';
import Content from './Content';

class About extends React.Component {
    render() {
        return (
            <>
                <div className="about-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="col-md-12 text-center">
                                    <div className="about-heading">
                                        <h3>About</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="title">All You Need is Fun!</div>
                                    <div className="intro-sec">
                                        <div className="intro">
                                            <h4>Introducing ToyStore</h4>
                                            <p className="text-grey">
                                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
                                            </p>
                                            <a href="/" alt="more_about_us">More About Us</a>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="content">
                               <Content />
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;
