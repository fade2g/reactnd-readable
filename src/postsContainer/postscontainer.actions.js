import {fetchFactory} from "../api/index";

export const LOAD_POSTS = 'LOAD_POSTS';

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    payload: posts
  }
}

export function loadPostsWithData(dispatch) {
  return function () {
    fetchFactory('posts')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(loadPosts(response))
      })
  }
}
