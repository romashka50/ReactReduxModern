import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
          className="form-control"
          placeholder="Search for weather"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
