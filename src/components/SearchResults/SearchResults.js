import React, { Component } from 'react';
import './SearchResults.css';
import {TrackList} from "../TrackList/TrackList";

const playlistTracks = [
	{
		album: 'Tiny Dancer',
		artist: 'Elton John',
		track: 'Madman Across The Water'
	},
	{
		album: 'Tiny Dancer',
		artist: 'Tim McGraw',
		track: 'Love Story'
	},
	{
		album: 'Tiny Dancer',
		artist: 'Rockabye Baby!',
		track: 'Lullaby Renditions of Elton John'
	},
	{
		album: 'Tiny Dancer',
		artist: 'The White Raven',
		track: 'Tiny Dancer'
	},
	{
		album: 'Tiny Dancer - Live Album Version',
		artist: 'Ben Folds',
		track: 'Ben Folds Live'
	}];

export class SearchResults extends Component {
	render() {
		return (
			<div className="SearchResults">
				<h2>Results</h2>
				<TrackList/>
			</div>
		);
	}
}
