import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.handleTermChange = this.handleTermChange.bind(this);
		this.search = this.search.bind(this);
	}

	handleTermChange(e) {
		this.setState({term: e.target.value});
	}

	search() {
		this.props.onSearch(this.state.term);
	}

	componentWillMount() {
		// Check localStorage for a value to the 'term' key.
		if (localStorage.getItem('term'))
			this.setState({term: localStorage.getItem('term')});
	}

	render() {
		return (
			<div className="SearchBar">
				<input
					placeholder="Enter A Song, Album or Artist"
					value={this.state.term}
					onChange={this.handleTermChange}
				/>

				<a onClick={this.search}>SEARCH</a>
			</div>
		);
	}
}

export default SearchBar;