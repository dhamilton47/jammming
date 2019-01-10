import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {searchValue: ''};

		this.search = this.search.bind(this);
		this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	search() {
		this.props.onSearch = this.state.searchValue;
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
				<a onClick={this.search}>SEARCH</a>
			</div>
		);
	}
}