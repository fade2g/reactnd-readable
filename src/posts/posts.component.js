import React, {Component} from 'react'
import PropTypes from 'prop-types';

import './posts.css';
import PostContainer from '../postContainer/postcontainer.component';

class Posts extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    posts: PropTypes.array.isRequired
  };

  render() {
    let {posts} = this.props;
    return <div className="ui main text container">
      <ul>
        {posts && posts.map(post => {
          return <li key={post.id}>{post.title}, #{post.numberOfComments}</li>
        })}
      </ul>
      <hr/>
      {posts && posts.map((post, index, posts) => (
        <PostContainer key={post.id} postId={post.id} lastItem={index === posts.length - 1}/>
      ))}
    </div>
  }
}

export default Posts;
