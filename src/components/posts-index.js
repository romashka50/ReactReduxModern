import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => (
      <li className="list-group-item" key={post.id}>
        <Link to={`posts/${post.id}`}>
          <span className="pull-xs-right">
            {post.categories}
          </span>
          <strong>{post.title}</strong>
        </Link>
      </li>
      ));
  }

  render() {
    return (
      <div >
        <div className="text-xs-right" >
          <Link to="/posts/new" className="btn btn-primary">
            Add new post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts: { all } }) => ({
  posts: all,
});

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
