import {LOAD_POST_COMMENTS} from "./commentscontainer.actions";

export function comments(state = {}, action) {
  const {type, payload} = action;
  switch (type) {
    case LOAD_POST_COMMENTS:
      return {
        ...state,
        [payload.id]: payload.comments
      };
    default:
      return state;
  }
}
