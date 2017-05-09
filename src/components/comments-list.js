import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

  return (
    <ul className="comment-list" >
      {list}
    </ul>
  );
};

const mapStateToProps = ({ comments }) => ({
  comments,
});

export default connect(mapStateToProps)(List);
