import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {searchValue: ''};

		this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(e) {
		this.props.searchSpotify(this.state.searchValue);
		e.preventDefault();
	}

	handleSearchValueChange(e) {
		this.setState({searchValue: e.target.value});
	}

	render() {
		return (
			<div className="SearchBar">
				<input onChange={this.handleSearchValueChange} placeholder="Enter A Song, Album or Artist" />
				<a onClick={this.handleSearch}>SEARCH</a>
			</div>
		);
	}
}