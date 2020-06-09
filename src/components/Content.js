import React from 'react';
import './Content.css';
// import { makeStyles } from '@material-ui/core/styles';
import Desc from '../media/desc.jpeg';

class Content extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 offset-md-2">
						<div className="side-content">
							<div className="side-info">
								<h3>Available for FREE!</h3>
							</div>
							<div className="divider" />
							<div className="desc">
								<p className="desc-text">
									A successful marketing plan relies heavily on the pulling-power of advertising copy.
									Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
									convince consumers to take action. There is no magic formula to write perfect ad
									copy
								</p>
								<a href="/" aria-current="page" className="button w-button w--current">
									GET&nbsp;IT&nbsp;NOW!
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 offset-md-1">
						<div className="desc-img side-block small-padding-side">
							<img src={Desc} alt=" " className="side-image" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;
