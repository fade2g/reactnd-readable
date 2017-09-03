import {fetchFactory, postFactory} from "../api/index";

export const LOAD_POST = 'LOAD_POST';
export const POST_UPDATED = 'POST_UPDATED';

function loadPost(postId, post) {
  return {
    type: LOAD_POST,
    payload: {
      id: postId,
      post
    }
  }
}

export function loadPostWithData(dispatch) {
  return function (postId) {
    fetchFactory('posts/' + postId)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(loadPost(postId, response))
      })
  }
}

function votePost(postId, updatedPost) {
  return {
    type: POST_UPDATED,
    payload: {
      id: postId,
      post: updatedPost
    }
  }
}

export function votePostUpdate(dispatch) {
  return function (postId, up) {
    return function () {
      postFactory('posts/' + postId, {option: up ? "upVote" : "downVote"})
        .then(response => response.json())
        .then(response => dispatch(votePost(postId, response)))
    }
  }
}
