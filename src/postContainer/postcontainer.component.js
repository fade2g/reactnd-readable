import React, {Component} from 'react';
import Post from "../post/post.component";
import {loadPostWithData} from "./postcontainer.action";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


class PostContainer extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    postId: PropTypes.string.isRequired
  };

  componentDidMount() {
    console.log('Load post for postId ' + this.props.postId);
    this.props.load(this.props.postId);
  }

  render() {
    const {posts, comments} = this.props;
    let post;
    posts.forEach(p => {if (p.id === this.props.postId) {post = p;}});
    return (<div className="post-container"><Post post={post} comments={comments[this.props.postId]}/> </div>)
  }
}

function mapStateToProps({posts, comments}) {
  return {
    posts: posts.posts,
    comments: comments || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: loadPostWithData(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
