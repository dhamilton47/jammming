import key from '../env.js';
//import {searchResultsTest} from '../components/SearchResults/searchResultsTest.js';

let accessToken;

export const Spotify = {
	applicationId: key['application_id'],
	redirect_uri: 'http://localhost:3000/',

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
	}
};