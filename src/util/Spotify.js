import key from '../env.js';
import {searchResultsTest} from '../components/SearchResults/searchResultsTest.js';

let accessToken;
let expiresIn;

export const Spotify = {
//	endpointAuthorize: 'https://accounts.spotify.com/authorize?',
//	endpointSearch: 'https://api.spotify.com/v1/search',
//	corsAnywhere: 'https://cors-anywhere.herokuapp.com/',
	applicationId: key['application_id'],
	redirect_uri: 'http://localhost:3000/',



// Login or register the user in order to access Spotify's services.
	// Search access has no user scope
	// Saving playlist access will require limited user permission scope
	getLogin() {
//		const xhr = new XMLHttpRequest();
//		const response_type = 'code';
//		const scope = 'user-read-private%20user-read-email%20playlist-modify-private%20playlist-modify-public';
/*
		const url = this.corsAnywhere
			+ this.endpointAuthorize
			+ 'client_id=' + this.applicationId
			+ '&response_type=' + response_type
			+ '&redirect_uri=' + this.redirect_uri
			+ '&scope=' + scope;
*/

//		xhr.responseType = 'json';
//		xhr.onreadystatechange = () =>{
//			if (xhr.readyState === XMLHttpRequest.DONE) {
//				return xhr.response;
//			}
//		};

//		xhr.open('GET', url);
//		xhr.send();

/*
	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		form: {
		code: 'code',
			redirect_uri: this.redirect_uri,
			grant_type: 'authorization_code'
		},
		headers: {
			'Authorization': 'Basic ' + (new Buffer(this.applicationId + ':' + this.applicationSecret).toString('base64'))
		},
		json: true
	};
*/
	},

	getAccessToken() {
		// First check, ss if we already have it
		if (accessToken) {return accessToken}

		// Second check, see if we have received the response from Spotify
		else if (window.location.href.match(/access_token=([^&]*)/) !== null) {
			accessToken = window.location.href.match(/access_token=([^&]*)/);
			expiresIn = window.location.href.match(/expires_in=([^&]*)/);
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accessToken;
		}

		// Third check, redirect User to Spotify to obtain an access token
		else {this.redirectUserToObtainAccessToken()}
	},

	redirectUserToObtainAccessToken() {
		window.location = `https://accounts.spotify.com/` +
			`authorize?client_id=${this.applicationId}` +
			`&response_type=token` +
			`&scope=playlist-modify-public` +
			`&redirect_uri=${this.redirect_uri}`;
	},

	// Search Spotify's database based on album, artist or track (song).
	// There are three (3) types of items to map: albums, artists and tracks.
	search(searchValue) {
		let returnValue = [];

		if (searchResultsTest.albums) {
			returnValue.push(
				searchResultsTest.albums.items.map(
					album => {
						return {
							type: album.type,
							id: album.id,
							album: album.name,
							artist: album.artists[0],
							track: '',
							uri: album.uri,
						}
					}
				)
			)
		} // Album mapping

		if (searchResultsTest.artists) {
			returnValue.push(
				searchResultsTest.artists.items.map(
					artist => {
						return {
							type: artist.type,
							id: artist.id,
							album: '',
							artist: artist.name,
							track: '',
							uri: artist.uri,
						}
					}
				)
			)
		} // Artist mapping

		if (searchResultsTest.tracks) {
			returnValue.push(
				searchResultsTest.tracks.items.map(
					track => {
						return {
							type: track.type,
							id: track.id,
							album: track.album.name,
							artist: track.artists[0],
							track: track.name,
							uri: track.uri,
						}
					}
				)
			)
		} // Track mapping

		return returnValue.flat();
	}
};