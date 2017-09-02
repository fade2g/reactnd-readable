import {LOAD_POSTS} from "./postscontainer.actions";

export function posts(state = {posts: []}, action) {
  const {type, payload} = action;
  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: payload.map(post => post)
      };
    default:
      return state;
  }
}
