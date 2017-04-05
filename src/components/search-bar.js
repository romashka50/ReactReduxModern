import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar" >
        <input
          placeholder="Search term"
          value={this.state.term}
          onChange={evt => this.setState({ term: evt.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
