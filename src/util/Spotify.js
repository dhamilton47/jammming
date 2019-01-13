import key from '../env.js';
//import {searchResultsTest} from '../components/SearchResults/searchResultsTest.js';

let accessToken;

const Spotify = {
	applicationId: key['application_id'],
	redirect_uri: 'https://hamjammming.surge.sh/',

	getAccessToken() {
		// Step 1, see if we already have an access token
		if (accessToken)
			return accessToken;

		// Step 2, if not, see if we have received a response from Spotify
		let url = window.location.href;
		if (url.match(/access_token=([^&]*)/) !== null) {
			accessToken = url.match(/access_token=([^&]*)/)[1];
			let expiresIn = url.match(/expires_in=([^&]*)/)[1];

			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');

			return accessToken;
		}

		// Step 3, if not, redirect User to Spotify to obtain an access token
		this.redirectUserToObtainAccessToken();
	},

	redirectUserToObtainAccessToken() {
		window.location = `https://accounts.spotify.com/` +
			`authorize?client_id=${this.applicationId}` +
			`&response_type=token` +
			`&scope=playlist-modify-public` +
			`&redirect_uri=${this.redirect_uri}`;
	},

	search(term) {
		let url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
		let init = {
			headers: {Authorization: `Bearer ${this.getAccessToken()}`}
		};

		return fetch(url, init)
			.then(response => {
				if (response.ok)
					return response.json();
				throw new Error('Request failed!');
			}, networkError => console.log(networkError.message))
			.then(jsonResponse => {
				if (jsonResponse.tracks.items) {
					return jsonResponse.tracks.items.map(
						track => {
							return {
								'id': track.id,
								'track': track.name,
								'artist': track.artists[0].name,
								'album': track.album.name,
								'uri': track.uri
							}
						}
					);
				}
			});
	},

	savePlaylist(playlistName, trackURIs) {
		if (!(playlistName && trackURIs.length !== 0)) {
			console.log('missing inputs', playlistName, ' ', trackURIs);
			return;
		}

		let accessToken = this.getAccessToken();

		const initGetUserID = {
			headers: {
				Authorization: `Bearer ${accessToken}`
			},
		};
		const initCreatePlaylist = {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({name: playlistName})
		};
		const initAddTracks = {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({uris: trackURIs})
		};

		const apiUrl = 'https://api.spotify.com/v1/';
		const generateUserIDEndpoint = 'me';
		const generateCreatePlaylistIdEndpoint = jsonResponse => {
			console.log('Create PlaylistId Endpoint: ',`users/${jsonResponse.id}/playlists`);
			return `users/${jsonResponse.id}/playlists`;
		};
		const generateAddTracksEndpoint = jsonResponse => {
			console.log('Add Tracks Endpoint: ', `playlists/${jsonResponse.id}/tracks`);
			return `playlists/${jsonResponse.id}/tracks`;
		};

		fetch(apiUrl + generateUserIDEndpoint, initGetUserID)
			.then(this.returnJson, this.returnError)
			.then(generateCreatePlaylistIdEndpoint)
			.then(createPlaylist => {
				fetch(apiUrl + createPlaylist, initCreatePlaylist)
					.then (this.returnJson, this.returnError)
					.then(generateAddTracksEndpoint)
					.then(addTracks => {
						fetch(apiUrl + addTracks, initAddTracks)
							.then (this.returnJson, this.returnError)
						/*	.then(jsonResponse => {
								console.log(`playlists/${jsonResponse.id}/tracks`);
								return `playlists/${jsonResponse.id}/tracks`;
							})*/
						;
					});
			});

	},

	returnJson(response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Request failed!');
	},

	returnError(networkError) {console.log(networkError.message)}
};

export default Spotify;