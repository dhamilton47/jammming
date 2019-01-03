import React, { Component } from 'react';
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends Component {

	render() {
		console.log('Tracklist: ',this.props);

		return (
			this.props.tracks.map(
				track => {
					return <Track key={track.id} track={track}/>;
				}
			)
		);
	}
}

export default TrackList;