import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
      >
        {book.title}
      </li>
      ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books,
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectBook }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
