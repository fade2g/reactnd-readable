import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import CommentsContainer from '../commentsContainer/commentscontainer.component'
import './post.css';

class Post extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array,
    lastItem: PropTypes.bool
  };

  render() {
    let {post, comments, lastItem} = this.props;
    return (
      <div>
        <div className="ui medium header">{post.title}</div>
        <div className="details">
          <span className="post-score post-detail-separator">
            <em>{post.voteScore}</em> point{post.voteScore !== 1 && 's'}
          </span>
          <span className="post-author post-detail-separator">by <em>{post.author}</em></span>
          <span className="post-author post-detail-separator">
            <em><Moment fromNow>{new Date(post.timestamp)}</Moment></em>
          </span>
          <span className="post-comments">
            <em>{comments && comments.length}</em> comment{comments && comments.length !== 1 && 's'}
          </span>
        </div>
        <div style={{display: "none"}}>
          <CommentsContainer postId={this.props.post.id } />
        </div>
        {!lastItem && <div className="ui divider" />}
      </div>
    )
  }
}

export default Post
