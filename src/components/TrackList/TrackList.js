import React, { Component } from 'react';
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends Component {
	render() {
		console.log('Tracklist: ',this.props);

		return (
			<div className="TrackList">
				{
					this.props.tracks.map(
						track => {
							return <Track
								key={track.id}
								track={track}
								onAdd={this.props.onAdd}
								isRemoval={this.props.isRemoval}
							/>;
						}
					)
				}
			</div>
		);
	}
}

export default TrackList;