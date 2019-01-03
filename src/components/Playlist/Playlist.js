import React, { Component } from 'react';
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

const tracks=[
	{
		id: '6',
		album: 'Oops!... I Did It Again',
		artist: 'Britney Spears',
		track: 'Stronger',
		action: '-'
	},
	{
		id: '7',
		album: 'Whitney',
		artist: 'Whitney Houston',
		track: 'So Emotional',
		action: '-'
	},
	{
		id: '8',
		album: 'My Love Is Your Love',
		artist: 'Whitney Houston',
		track: 'It\'s Not Right But It\'s Okay',
		action: '-'
	}
];

export class Playlist extends Component {
	render() {
		console.log('Playlist: ',this.props);
		return (
			<div className="Playlist">
				<input defaultValue='New Playlist'/>
				<div className="TrackList">
					<TrackList tracks={tracks}/>
				</div>
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}
