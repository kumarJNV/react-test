import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ItemSlider.css';
import mega from '../media/mega.png';
import little from '../media/little.png';
import tedd from '../media/tedd.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
 
class ItemCarousel extends Component {
    render() {
        return (
            <div className="item-carousel">
                <div className="carousel-name">
                    <h3> Some Product</h3>
                </div>
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className="item-contain" >
                    <img src={tedd} alt="1" className="img-item" />
                    <div className="pro-name">
                        <span>Teddy</span>
                    </div>
                </div>
                <div className="item-contain">
                    <img src={mega} alt="2" className="img-item" />
                    <div className="pro-name">
                        <span>Mega</span>
                    </div>
                </div>
                <div className="item-contain">
                    <img src={tedd} alt="3" className="img-item" />
                    <div className="pro-name">
                        <span>Teddy</span>
                    </div>
                </div>
                <div className="item-contain">
                    <img src={little} alt="4" className="img-item" />
                    <div className="pro-name">
                        <span>Little</span>
                    </div>
                </div>
                </Carousel>
                <hr></hr>
            </div>
        );
    }
};

export default ItemCarousel;