import React, { Component } from 'react';
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

export class Playlist extends Component {
	render() {
		console.log('Playlist: ',this.props);
		return (
			<div className="Playlist">
				<input defaultValue='New Playlist'/>
				<div className="TrackList">
					<TrackList tracks={this.props.tracks}/>
				</div>
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}
