import React, { Component } from 'react';
import './Track.css';

export class Track extends Component {
	render() {
		return (
			<div className="Track">
				<div className="Track-information">
					<h3>Stronger</h3>
					<p>Britney Spears | Oops!... I Did It Again</p>
				</div>
				<a className="Track-action">-</a>
			</div>
		);
	}
}