import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

const tracks=[
	{
		id: '1',
		album: 'Madman Across The Water',
		artist: 'Elton John',
		track: 'Tiny Dancer',
		action: '+'
	},
	{
		id: '2',
		album: 'Love Story',
		artist: 'Tim McGraw',
		track: 'Tiny Dancer',
		action: '+'
	},
	{
		id: '3',
		album: 'Lullaby Renditions of Elton John',
		artist: 'Rockabye Baby!',
		track: 'Tiny Dancer',
		action: '+'
	},
	{
		id: '4',
		album: 'Tiny Dancer',
		artist: 'The White Raven',
		track: 'Tiny Dancer',
		action: '+'
	},
	{
		id: '5',
		album: 'Ben Folds Live',
		artist: 'Ben Folds',
		track: 'Tiny Dancer - Live Album Version',
		action: '+'
	}];

export class SearchResults extends Component {
	render() {
		return (
			<div className="SearchResults">
				<h2>Results</h2>
				<TrackList key={tracks.id} tracks={tracks}/>
			</div>
		);
	}
}
