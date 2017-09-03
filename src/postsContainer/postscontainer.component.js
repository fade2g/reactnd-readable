import React, {Component} from 'react'
import {connect} from "react-redux";
import Posts from "../posts/posts.component";
import {loadPostsWithData} from "./postscontainer.actions";
import PropTypes from 'prop-types';


/**
 * This class is the container for posts and handles retrieval, data tronsformation and update aspects
 *
 * It is used, to decouple the data management aspects from the rendering aspects
 * For rendering, the @see{Posts) component will be used
 */
class PostsContainer extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    category: PropTypes.string
  };

  componentDidMount() {
    this.props.loadPosts(this.props.category);
  }

  render() {
    return (<div>
      <Posts posts={this.props.posts}/>
    </div>)
  }
}

function mapStateToProps({categories, posts}) {
  return {
    categories: categories.categories,
    posts: posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: loadPostsWithData(dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
