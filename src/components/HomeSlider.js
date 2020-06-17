import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../media/slider1.jfif';
import slider2 from '../media/slider2.jfif';
import slider3 from '../media/slider3.jfif';

class HomeSlider extends React.Component {
	render() {
		return (
			<div className="carousel-area">
				<div>
					<div>
						<div class="full-screen">
							<div
								className="mbr-slider slide carousel"
								data-pause="true"
								data-keyboard="false"
								data-ride="false"
								data-interval="false"
							>
								<ol className="carousel-indicators">
									<li
										data-app-prevent-settings=""
										data-target="#slider1-2i"
										className=" active"
										data-slide-to="0"
									/>
									<li data-app-prevent-settings="" data-target="#slider1-2i" data-slide-to="1" />
									<li data-app-prevent-settings="" data-target="#slider1-2i" data-slide-to="2" />
								</ol>
								<div className="carousel-inner" role="listbox">
									<div
										className="carousel-item slider-fullscreen-image active"
										data-bg-video-slide="https://www.youtube.com/watch?v=AokhuBrxVmc"
									>
										<div className="mbr-overlay" />
										<div
											className="mbr-background-video-preview"
											style={{
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												backgroundImage:
													'url(' +
													'https://img.youtube.com/vi/AokhuBrxVmc/maxresdefault.jpg' +
													')'
											}}
										/>
										<div
											className="mbr-background-video mb_YTPlayer isMuted"
											id="YTP_1592380162120"
										>
											<div
												className="mbYTP_wrapper"
												id="wrapper_YTP_1592380162120"
												style={{
													position: 'absolute',
													zIndex: '0',
													minWidth: '100%',
													minHeight: '100%',
													left: '0px',
													top: '0px',
													overflow: 'hidden',
													opacity: '1',
													transitionProperty: 'opacity',
													transitionDuration: '1000ms'
												}}
											>
												<iframe
													id="iframe_YTP_1592380162120"
													className="playerBox"
													style={{
														position: 'absolute',
														zIndex: '0',
														width: '1519px',
														height: '855px',
														top: '0px',
														left: '0px',
														overflow: 'hidden',
														opacity: '1',
														userSelect: 'none',
														marginTop: -'198px',
														marginLeft: '0px',
														maxWidth: 'initial',
														transitionProperty: 'opacity',
														transitionDuration: '1000ms'
													}}
													frameborder="0"
													allowfullscreen="1"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													title="YouTube video player"
													width="640"
													height="360"
													src="https://www.youtube.com/embed/AokhuBrxVmc?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_YTP_1592380162120&amp;origin=https%3A%2F%2Fmobirise.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;html5=1&amp;widgetid=1"
													unselectable="on"
												/>
												<div
													className="YTPOverlay"
													style={{
														position: 'absolute',
														top: '0px',
														left: '0px',
														width: '100%',
														height: '100%',
														opacity: '0.5',
														backgroundColor: 'rgb(0, 0, 0)'
													}}
												/>
											</div>
										</div>
										<div className="container container-slide">
											<div className="image_wrapper">
												<img src="assets2/images/1.jpg" style={{ opacity: 0 }} />
												<div className="carousel-caption justify-content-center">
													<div className="col-10 align-center">
														<h2 className="mbr-fonts-style display-1">
															CHRISTMAS LIGHTS...
														</h2>
														<p className="lead mbr-text mbr-fonts-style display-2">
															{' '}
															Proin faucibus, mi quis malesuada mattis, nibh odio eleifend
															justo, quis accumsan nisl sem sed purus.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="carousel-item slider-fullscreen-image"
										data-bg-video-slide="https://www.youtube.com/watch?v=7rLUJpksxgI"
									>
										<div className="mbr-overlay" />
										<div
											className="mbr-background-video-preview"
											style={{
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												backgroundImage:
													'url(' +
													'https://img.youtube.com/vi/7rLUJpksxgI/maxresdefault.jpg' +
													')'
											}}
										/>
										<div
											className="mbr-background-video mb_YTPlayer isMuted"
											id="YTP_1592380162125"
										>
											<div
												className="mbYTP_wrapper"
												id="wrapper_YTP_1592380162125"
												style={{
													position: 'absolute',
													zIndex: '0',
													minWidth: '100%',
													minHeight: '100%',
													left: '0px',
													top: '0px',
													overflow: 'hidden',
													opacity: '1',
													transitionProperty: 'opacity',
													transitionDuration: '1000ms'
												}}
											>
												<iframe
													id="iframe_YTP_1592380162125"
													className="playerBox"
													style={{
														position: 'absolute',
														zIndex: '0',
														width: '0px',
														height: '0px',
														top: '0px',
														left: '0px',
														overflow: 'hidden',
														opacity: '1',
														userSelect: 'none',
														marginTop: '0px',
														marginLeft: '0px',
														maxWidth: 'initial',
														transitionProperty: 'opacity',
														transitionDuration: '1000ms'
													}}
													frameborder="0"
													allowfullscreen="1"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													title="YouTube video player"
													width="640"
													height="360"
													src="https://www.youtube.com/embed/7rLUJpksxgI?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_YTP_1592380162125&amp;origin=https%3A%2F%2Fmobirise.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;html5=1&amp;widgetid=2"
													unselectable="on"
												/>
												<div
													className="YTPOverlay"
													style={{
														position: 'absolute',
														top: '0px',
														left: '0px',
														width: '100%',
														height: '100%',
														opacity: '0.5',
														backgroundColor: 'rgb(0, 0, 0)'
													}}
												/>
											</div>
										</div>
										<div className="container container-slide">
											<div className="image_wrapper">
												<img src="assets2/images/2.jpg" style={{ opacity: '0' }} />
												<div className="carousel-caption justify-content-center">
													<div className="col-10 align-center">
														<h2 className="mbr-fonts-style display-1">
															CHRISTMAS IS COMING...
														</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeSlider;
