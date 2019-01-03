import React, { Component } from 'react';
import './AppPlaylist.css';
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";

export class AppPlaylist extends Component {
	constructor(props) {
		super(props);
		this.state = { tracks: [], action: '-' };
	}

	render() {
		console.log('AppPlaylist: ',this.props);
		return (
			<div className="App-playlist">
				<SearchResults  tracks={this.props.tracks}/>
				<Playlist  tracks={this.state.tracks}/>
			</div>
		);

	}
}