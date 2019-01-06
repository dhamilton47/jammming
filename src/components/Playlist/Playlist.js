import React, { Component } from 'react';
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

export class Playlist extends Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(e) {
		this.props.onNameChange(e.target.value);
	}

	render() {
//		console.log('Playlist: ',this.props.onRemove);
		return (
			<div className="Playlist">
				<input onChange={this.handleNameChange} defaultValue={this.props.playlistName}/>
				<div className="TrackList">
					<TrackList
						tracks={this.props.tracks}
						onRemove={this.props.onRemove}
						isRemoval={true}
					/>
				</div>
				<a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
			</div>
		);
	}
}
