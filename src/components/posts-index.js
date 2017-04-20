import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    // const { p1, p2 } = this.props;
    return (
      <div className="" >
        List of posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);
