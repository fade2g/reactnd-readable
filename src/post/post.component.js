import React, {Component} from 'react'
import PropTypes from 'prop-types';
import CommentsContainer from '../commentsContainer/commentscontainer.component'

class Post extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array
  };

  render() {
    let {post, comments} = this.props;
    console.log(post);
    return (
      <div>
        {post.title} # {comments && comments.length}
        <div>
          <CommentsContainer postId={this.props.post.id}/>
        </div>
      </div>
    )
  }
}

export default Post
