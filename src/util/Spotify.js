import key from '../env.js';
import {searchResultsTest} from '../components/SearchResults/searchResultsTest.js';

export const Spotify = {
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