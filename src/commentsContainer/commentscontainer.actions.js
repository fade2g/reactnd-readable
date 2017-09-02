import {fetchFactory} from "../api/index";

export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS';

function loadPostComments(postId, comments) {
  return {
    type: LOAD_POST_COMMENTS,
    payload: {
      id: postId,
      comments
    }
  }
}

export function loadPostCommentWithData(dispatch) {
  return function (postId) {
    fetchFactory('posts/' + postId + '/comments')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(loadPostComments(postId, response))
      })
  }
}
