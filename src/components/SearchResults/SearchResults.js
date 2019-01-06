import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

export class SearchResults extends Component {
	render() {
//		console.log('SearchResults: ',this.props.onAdd);
		return (
			<div className="SearchResults">
				<h2>Results</h2>
				<TrackList
					tracks={this.props.tracks}
					onAdd={this.props.onAdd}
					isRemoval={false}
				/>
			</div>

		);
	}
}
