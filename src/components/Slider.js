import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
// import slider1 from '../media/slider1.jfif';
// import slider2 from '../media/slider2.jfif';
// import slider3 from '../media/slider3.jfif';

import Envelope from '../media/envelope.jfif';
import Cards from '../media/cards.jfif';
import Writing from '../media/writing.jfif';

class Slider extends React.Component {
	render() {
		return (
			<div className="carousel-area">
				<div>
					<div>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={Envelope} alt="First slide" />
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p className="caption-text">
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={Cards} alt="Third slide" />
								<Carousel.Caption>
									<h3>Second slide label</h3>
									<p className="caption-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={Writing} alt="Third slide" />
								<Carousel.Caption>
									<h3>Third slide label</h3>
									<p className="caption-text">
										Praesent commodo cursus magna, vel scelerisque nisl consectetur.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		);
	}
}

export default Slider;
