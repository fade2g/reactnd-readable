import {INIT_CATEGORIES} from "./actions";

export function categories(state = {categories:[]}, action) {
  switch (action.type) {
    case INIT_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
}
