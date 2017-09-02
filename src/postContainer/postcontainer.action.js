import {fetchFactory} from "../api/index";

export const LOAD_POST = 'LOAD_POST';

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
