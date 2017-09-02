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
        {posts && posts.map(post => {return <li key={post.id}>{post.title}, #{post.numberOfComments}</li>})}
      </ul>
      <hr />
        <ul>
          {posts && posts.map(post => (<PostContainer key={post.id} postId={post.id}/>))}
        </ul>
    </div>
  }
}

export default Posts;
