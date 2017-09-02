import {INIT_CATEGORIES, SET_NEW_CATEGORY} from "./actions";

export function categories(state = {categories:[]}, action) {
  switch (action.type) {
    case INIT_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case SET_NEW_CATEGORY: {
      return {
        ...state,
        currentCategory: action.category
      }
    }
    default:
      return state;
  }
}
