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
                <div className="itemslider-section">
                    <ItemSlider />
                </div>
                <div className="container-fluid p-0">
                    <div className="wrapper">
                        <div className="img-section" style={{backgroundImage: `url(${teddy})`}}>
                            <div className="home-content">
                                <div className="col-md-6 about-site">
                                    {/* <div className="title">About The Site</div> */}
                                    <h3 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold"}}>Watch Our Story</h3>
                                    <p style={{ color: "#fff", fontWeight: "light"}}>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;
