import React from 'react';
import '../App.css';
import './Skills.css';
import dog from '../media/dog.png';
import mega from '../media/mega.png';
import little from '../media/little.png';
import tedd from '../media/tedd.png';
import Delivery from './Delivery';

class Skills extends React.Component {
    render() {
        return (
            <>
                <Delivery />
                <div className="about-area">
                    <div className="container-fluid">
                        <div className="row skill-background">
                            <div className="col-md-12 p-0">
                                <div className="col-md-12 text-center">
                                    <div className="about-heading">
                                        <h3>Skills</h3>
                                    </div>
                                </div>
                                <div className="col-md-10 offset-md-1 skill-wrapper">
                                    <div className="skill-card-wrapper">
                                        <a href="/">
                                            <div className="skill-card-image-wrapper">
                                                <img src={tedd} alt="img" className="skills-img"></img>
                                            </div>
                                            <h5>Teddy</h5>
                                            <div>More Info</div>
                                        </a>
                                    </div>
                                    <div className="skill-card-wrapper">
                                        <a href="/">
                                            <div className="skill-card-image-wrapper">
                                                <img src={mega} alt="img" className="skills-img"></img>
                                            </div>
                                            <h5>Mega Plus Toy</h5>
                                            <div>More Info</div>
                                        </a>
                                    </div>
                                    <div className="skill-card-wrapper">
                                        <a href="/">
                                            <div className="skill-card-image-wrapper">
                                                <img src={dog} alt="img" className="skills-img"></img>
                                            </div>
                                            <h5>Cute Dog</h5>
                                            <div>More Info</div>
                                        </a>
                                    </div>
                                    <div className="skill-card-wrapper">
                                        <a href="/">
                                            <div className="skill-card-image-wrapper">
                                                <img src={little} alt="img" className="skills-img"></img>
                                            </div>
                                            <h5>Little  Friend</h5>
                                            <div>More Info</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </>
        );
    }
}

export default Skills;
