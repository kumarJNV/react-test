import React from 'react';
import '../App.css';
import './HomePage.css';
import teddy from '../media/teddy.jpg';
import Slider from './Slider';
import ItemSlider from './ItemSlider';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <div className="carousel-section">
                        <Slider />
                 </div>
                <div className="container-fluid p-0">
                    <hr></hr>
                    <div className="wrapper">
                        <div className="img-section" style={{backgroundImage: `url(${teddy})`}}>
                            <div className="home-content">
                                <div className="col-md-6 about-site">
                                    {/* <div className="title">About The Site</div> */}
                                    <h3 style={{color: "#000000", fontSize: "1.5rem", fontWeight: "bold"}}>Watch Our Story</h3>
                                    <p style={{color: "#191970", fontWeight: "600"}}>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
                                    <h3 style={{color: "#B22222"}}>Home Page</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className="itemslider-section">
                            <ItemSlider />
                </div>
            </>
        );
    }
}

export default HomePage;
