import React, { Component } from 'react';
import './App.css';
import {SearchBar} from "./components/SearchBar/SearchBar";
import {AppPlaylist} from "./components/AppPlaylist/AppPlaylist";
import {Spotify} from "./util/Spotify";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { tracks: [] };

        this.searchSpotify = this.searchSpotify.bind(this);
    }

    searchSpotify(searchValue) {
	    Spotify.search(searchValue);
        this.setState({tracks: Spotify.search(searchValue)});
    }

    render() {
	    console.log('App :',this.state);

        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar searchSpotify={this.searchSpotify}/>
                    <AppPlaylist tracks={this.state.tracks}/>
                </div>
            </div>
        );
    }
}

export default App;
