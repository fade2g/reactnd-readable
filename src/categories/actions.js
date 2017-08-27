import {fetchFactory} from "../api/index";

export const INIT_CATEGORIES = 'INIT_CATEGORIES';

export function initCategories(categories) {
  return {
    type: INIT_CATEGORIES,
    categories
  }
}

export function initCategoriesWithDataThunk() {
  return function (dispatch) {
    fetchFactory('categories')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(initCategories(response.categories))
      })
  }
}
