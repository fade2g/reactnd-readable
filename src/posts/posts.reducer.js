import {LOAD_POSTS} from "./posts.actions";

export function posts(state = {posts:[]}, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
}
