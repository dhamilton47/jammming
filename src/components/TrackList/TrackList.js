import React, { Component } from 'react';
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends Component {

	render() {
		return (

				this.props.tracks.map(
					track => {
						return <Track track={track}/>;
					}
				)
		);
	}
}

export default TrackList;