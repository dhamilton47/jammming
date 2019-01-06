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
    }

    searchSpotify(searchValue) {
	    Spotify.search(searchValue);
        this.setState({searchResultsTracks: Spotify.search(searchValue)});
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