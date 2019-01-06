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
        };

        this.searchSpotify = this.searchSpotify.bind(this);
	    this.addTrack = this.addTrack.bind(this);
	    this.removeTrack = this.removeTrack.bind(this);
	    this.updatePlaylistName = this.updatePlaylistName.bind(this);
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

	removeTrack(track) {
		const result = this.state.playlistTracks.filter(keep => keep.id !== track.id);
		this.setState({playlistTracks: result});
	}

	updatePlaylistName(name) {
    	this.setState({playlistName: name})
	}

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
			                playlistName={this.state.playlistName}
			                onRemove={this.removeTrack}
			                onNameChange={this.updatePlaylistName}
		                />
	                </div>
                </div>
            </div>
        );
    }
}

export default App;
