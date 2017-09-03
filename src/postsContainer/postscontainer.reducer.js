import {LOAD_POSTS} from "./postscontainer.actions";
import {POST_UPDATED} from "../postContainer/postcontainer.action";

export function posts(state = {posts: []}, action) {
  const {type, payload} = action;
  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: payload.map(post => post)
      };
    case
    POST_UPDATED:
      return {
        ...state,
        posts: state.posts.map(post => {
          return payload.id === post.id ? payload.post : post;
        })
      };
    default:
      return state;
  }
}
