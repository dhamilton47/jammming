import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
	render() {
		console.log('Track: ',this.props);

		return (
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.track.track}</h3>
					<p>{this.props.track.artist} | {this.props.track.album}</p>
				</div>
				<a className="Track-action">{this.props.track.action}</a>
			</div>
		);
	}
}

export default Track;