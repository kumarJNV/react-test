import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import slider1 from '../media/slider1.jfif';
import slider2 from '../media/slider2.jfif';
import slider3 from '../media/slider3.jfif';



class Slider extends React.Component {
    render() {
        return (
            <>
                <Container className="carousel-area">
                    <div>
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p className="caption-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider2}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p className="caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={slider3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p className="caption-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Slider;
