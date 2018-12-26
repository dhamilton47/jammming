import React, { Component } from 'react';
import './AppPlaylist.css';
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";

export class AppPlaylist extends Component {
	render() {
		return (
			<div className="App-playlist">
				<SearchResults/>
				<Playlist/>
			</div>
		);
	}
}