import React, { Component } from 'react';
import './Playlist.css';
import {Track} from "../Track/Track";
import {TrackList} from "../TrackList/TrackList";

const playlistTracks = [
	{
		album: 'Oops!... I Did It Again',
		artist: 'Britney Spears',
		track: 'Stronger'
	},
	{
		album: 'Whitney',
		artist: 'Whitney Houston',
		track: 'So Emotional'
	},
	{
		album: 'My Love Is Your Love',
		artist: 'Whitney Houston',
		track: 'It\'s Not Right But It\'s Okay'
	}
];

export class Playlist extends Component {
	render() {
		return (
			<div className="Playlist">
				<input value='New Playlist'/>
				<div className="TrackList">
					<Track/>
					<div className="Track">
						<div className="Track-information">
							<h3>So Emotional</h3>
							<p>Whitney Houston | Whitney</p>
						</div>
						<a className="Track-action">-</a>
					</div>
					<div className="Track">
						<div className="Track-information">
							<h3>It's Not Right But It's Okay</h3>
							<p>Whitney Houston | My Love Is Your Love</p>
						</div>
						<a className="Track-action">-</a>
					</div>
				</div>
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}
