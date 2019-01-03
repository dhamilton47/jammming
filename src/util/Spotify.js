import key from '../env.js';
import {searchResultsTest} from '../components/SearchResults/searchResultsTest.js';

export const Spotify = {
	endpointAuthorize: 'https://accounts.spotify.com/authorize?',
	endpointSearch: 'https://api.spotify.com/v1/search',
	applicationId: key['application_id'],
	applicationSecret: key['application_secret'],
	corsAnywhere: 'https://cors-anywhere.herokuapp.com/',
	redirect_uri: 'http%3A%2F%2Flocalhost:3000%2Fcallback',



// Login or register the user in order to access Spotify's services.
	// Search access has no user scope
	// Saving playlist access will require limited user permission scope
	getLogin() {
		const response_type = 'code';
		const scope = 'user-read-private%20user-read-email%20playlist-modify-private%20playlist-modify-public';

		return fetch(
			this.corsAnywhere
			+ this.endpointAuthorize
			+ 'client_id=' + this.applicationId
			+ '&response_type=' + response_type
			+ '&redirect_uri=' + this.redirect_uri
			+ '&scope=' + scope,
			{headers:{'X-Requested-With': 'XMLHttpRequest'}})
			.then(response => { return response});
	},

	getAccessToken() {
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
							action: '+'
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
							action: '+'
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
							action: '+'
						}
					}
				)
			)
		} // Track mapping

		return returnValue.flat();
	}
};