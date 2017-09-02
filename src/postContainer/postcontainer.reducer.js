import {LOAD_POST} from "./postcontainer.action";

export function post(state = {posts: []}, action) {
  const {type, payload} = action;
  switch (type) {
    case LOAD_POST:
      return {
        ...state,
        [payload.postId]: payload.post
      };
    default:
      return state;
  }
}
