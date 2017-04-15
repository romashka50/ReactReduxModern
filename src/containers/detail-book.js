import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailBook extends Component {
  render() {
    if (!this.props.activeBook) {
      return (
        <div>
          Please select a book
        </div>
      );
    }
    return (
      <div>
        <h3>Detail for:</h3>
        <div>Title: {this.props.activeBook.title}</div>
        <div>pages: {this.props.activeBook.pages}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeBook }) => ({
  activeBook,
});

export default connect(mapStateToProps)(DetailBook);
