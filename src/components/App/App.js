import React, { Component } from 'react';
import './App.css';
import {SearchBar} from "../SearchBar/SearchBar";
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";
import {Spotify} from "../../util/Spotify";

import {playlistTracks} from "../SearchResults/searchResultsTest";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
	        searchResultsTracks: [],
	        playlistName: "Dan's Playlist",
	        playlistTracks: playlistTracks,
//	        playlistAction: this.playlistAction
        };

        this.searchSpotify = this.searchSpotify.bind(this);
//	    this.playlistAction = this.playlistAction.bind(this);
	    this.addTrack = this.addTrack.bind(this);
    }

    searchSpotify(searchValue) {
	    Spotify.search(searchValue);
        this.setState({searchResultsTracks: Spotify.search(searchValue)});
    }

    addTrack(track) {
		if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
		    return;
	    }
    	this.state.playlistTracks.push(track);
    	this.setState({playlistTracks: this.state.playlistTracks});
    }

/*
	playlistAction(action, id) {
    	if (action === "+" && !(id in this.state.playlistTracks)) {
			this.state.playlistTracks.push(this.state.searchResultsTracks)
	    }
	}
*/

    render() {
	    console.log('App :',this.state);

        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar searchSpotify={this.searchSpotify}/>

	                <div className="App-playlist">
		                <SearchResults
			                tracks={this.state.searchResultsTracks}
			                onAdd={this.addTrack}/>
		                <Playlist
			                tracks={this.state.playlistTracks}
		                />
	                </div>
                </div>
            </div>
        );
    }
}

export default App;
