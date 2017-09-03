import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Comments extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    comments: PropTypes.array
  };

  render() {
    let {comments} = this.props;
    return (
      <div>
        <p>Here come the comments</p>
        <ul>
          {comments && comments.map(comment => <li key={comment.id}>This is the comment:
            <ul>
              <li>author: {comment.author}</li>
              <li>body: {comment.body}</li>
              <li>deleted: {comment.deleted}</li>
              <li>parentDeleted: {comment.parentDeleted}</li>
              <li>parentId: {comment.parentId}</li>
              <li>timestamp: {(new Date(comment.timestamp)).toLocaleString()}</li>
              <li>voteScore: {comment.voteScore}</li>
            </ul>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Comments
