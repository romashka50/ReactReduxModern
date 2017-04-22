import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div >
        <div className="text-xs-right" >
          <Link to="/posts/new" className="btn btn-primary">
            Add new post
          </Link>
        </div>
        List of posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);
