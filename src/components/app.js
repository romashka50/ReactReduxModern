import React, { Component } from 'react';

import BookList from '../containers/book-list';
import DetailBook from '../containers/detail-book';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <DetailBook />
      </div>
    );
  }
}
