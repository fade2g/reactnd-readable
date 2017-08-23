import {INIT_CATEGORIES} from "./categories.action";

export function categories(state = {categories:[]}, action) {
  switch (action.type) {
    case INIT_CATEGORIES:
      return {
        ...state,
        categories: ['one', 'two', 'three']
      };
    default:
      return state;
  }
}
