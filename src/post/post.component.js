import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import CommentsContainer from '../commentsContainer/commentscontainer.component'
import './post.css';
import {VoteUp, VoteDown} from "../icons/index";

class Post extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array,
    lastItem: PropTypes.bool,
    voteHandler: PropTypes.func
  };

  render() {
    let {post, comments, lastItem, voteHandler} = this.props;
    return (
      <div>
        <VoteUp clickHandler={voteHandler(post.id, true)}/><VoteDown clickHandler={voteHandler(post.id, false)}/>
        {post.updating}
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
