import React, { Component } from 'react';
import CommentBox from './comments-box';
import CommentList from './comments-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
