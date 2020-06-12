import React from 'react';
import '../App.css';
import './Portfolio.css';
import dog from '../media/dog.png';
import mega from '../media/mega.png';
import little from '../media/little.png';
import tedd from '../media/tedd.png';

class Portfolio extends React.Component {
	render() {
		return (
			<div className="about-area">
				<div className="section no-padding-vertical">
					<div className="wrapper-port side-paddings">
						<div data-w-id="e89551e9-b5ae-51a6-c418-02c90497790c" className="subscribe">
							<div className="subscribe-info">
								<div className="subscribe-icon">
									<img
										src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg"
										alt=""
									/>
								</div>
								<h4>
									Subscribe to our newsletter<br />&amp; get{' '}
									<span className="text-green">10% discount!</span>
								</h4>
							</div>
							<div className="subscribe-form-wrapper w-form">
								<form
									id="wf-form-Subscribe-Form"
									name="wf-form-Subscribe-Form"
									data-name="Subscribe Form"
									className="subscribe-form"
								>
									<input
										type="email"
										className="input subscribe-input w-input"
										maxLength="256"
										name="email-2"
										data-name="Email 2"
										placeholder="Enter your email address"
										id="email-2"
										required=""
									/>
									<input
										type="submit"
										value="Subscribe"
										data-wait="Please wait..."
										className="button w-button"
									/>
								</form>
								<div className="form-success w-form-done">
									<div>Thank you! Your submission has been received!</div>
								</div>
								<div className="form-error w-form-fail">
									<div>Oops! Something went wrong while submitting the form.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 p-0 portfolio-bg">
							<div className="col-md-12 text-center">
								<div className="about-heading">
									<h3>Portfolio</h3>
								</div>
							</div>
							<div className="port-folio">
								<div className="col-md-10 offset-md-1 skill-wrapper">
									<div className="skill-card-wrapper">
										<a href="/">
											<div className="skill-card-image-wrapper">
												<img src={tedd} alt="img" className="skills-img" />
											</div>
											<h5>Teddy</h5>
											<div>More Info</div>
										</a>
									</div>
									<div className="skill-card-wrapper">
										<a href="/">
											<div className="skill-card-image-wrapper">
												<img src={mega} alt="img" className="skills-img" />
											</div>
											<h5>Mega Plus Toy</h5>
											<div>More Info</div>
										</a>
									</div>
									<div className="skill-card-wrapper">
										<a href="/">
											<div className="skill-card-image-wrapper">
												<img src={dog} alt="img" className="skills-img" />
											</div>
											<h5>Cute Dog</h5>
											<div>More Info</div>
										</a>
									</div>
									<div className="skill-card-wrapper">
										<a href="/">
											<div className="skill-card-image-wrapper">
												<img src={little} alt="img" className="skills-img" />
											</div>
											<h5>Little Friend</h5>
											<div>More Info</div>
										</a>
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

export default Portfolio;
