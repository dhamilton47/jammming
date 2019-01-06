import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
	constructor(props) {
		super(props);

		this.addTrack = this.addTrack.bind(this);
	}

	addTrack() {
		this.props.onAdd(this.props.track);
	}

	renderAction(isRemoval) {
		if (isRemoval) {
			return <a className="Track-action">-</a>
		}
		return <a className="Track-action" onClick={this.addTrack}>+</a>
	}
	render() {
//		console.log('Track: ',this.props);

		return (
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.track.track}</h3>
					<p>{this.props.track.artist} | {this.props.track.album}</p>
				</div>
				<a className="Track-action">{this.props.track.action}</a>
				{this.renderAction(this.props.isRemoval)}
			</div>
		);
	}
}

export default Track;