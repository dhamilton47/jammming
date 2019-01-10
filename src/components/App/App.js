import React, { Component } from 'react';
import './App.css';
import {SearchBar} from "../SearchBar/SearchBar";
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../Playlist/Playlist";
import {Spotify} from "../../util/Spotify";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
	        searchResults: [],
	        playlistName: "Styx",
	        playlistTracks: [],
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
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
    search(term) {
    	Spotify.search(term)
		    .then(tracks => {
		    this.setState({searchResults: tracks})
	    })

	savePlaylist() {
    	let trackURIs = playlistTracks.forEach(track => track.uri);
	}

    render() {
	    console.log('App :',this.state);

        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />

	                <div className="App-playlist">
		                <SearchResults
			                tracks={this.state.searchResultsTracks}
			                onSearch={this.savePlaylist}
			                onAdd={this.addTrack}/>
		                <Playlist
			                tracks={this.state.playlistTracks}
			                playlistName={this.state.playlistName}
			                onRemove={this.removeTrack}
			                onNameChange={this.updatePlaylistName}
			                onSave={this.savePlaylist}
		                />
	                </div>
                </div>
            </div>
        );
    }
}

export default App;
