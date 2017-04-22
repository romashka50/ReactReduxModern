import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => this.context.router.push('/'));
  }

  render() {
    const { handleSubmit } = this.props;
    const { fields: { title, categories, content } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <div>
          <h3>Create a new Post</h3>

          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
            <div className="form-control-feedback" >
              {title.touched ? title.error : ''}
            </div>
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`} >
            <label htmlFor="" >Categories</label>
            <input type="text" className="form-control" {...categories} />
            <div className="form-control-feedback" >
              {categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`} >
            <label htmlFor="" >Content</label>
            <textarea className="form-control" {...content} />
            <div className="form-control-feedback" >
              {content.touched ? content.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>
          <Link to="/" className="btn btn-danger" >Cancle</Link>
        </div>
      </form>
    );
  }
}

function validate(fields) {
  const errors = {};

  if (!fields.title) {
    errors.title = 'Please enter valid title';
  }
  if (!fields.categories) {
    errors.categories = 'Please enter valid category';
  }
  if (!fields.content) {
    errors.content = 'Please enter valid content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(PostsNew);
