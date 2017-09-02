import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {loadPostCommentWithData} from "./commentscontainer.actions";
import Comments from "../comments/comments.component";
import {connect} from "react-redux";


class CommentsContainer extends Component {

  // noinspection JSUnusedGlobalSymbols
  static propTypes = {
    postId: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.load(this.props.postId);
  }

  render() {
    console.log('Render comments for postId ' + this.props.postId + ' with comments ' + this.props.comments);
    return <Comments comments={this.props.comments[this.props.postId]}/>
  }
}

function mapStateToProps({comments}) {
  return {
    comments: comments || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: loadPostCommentWithData(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
