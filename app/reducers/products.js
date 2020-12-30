import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCHING,
} from "./../reducers/actions/common";
export const initialState = {
  loading: false,
  error: false,
  products: [],
  categories: [],
};

export function productsReducer(state, action) {
  switch (action.type) {
    case FETCHING:
      return {
        loading: true,
        error: false,
        product: [],
        categorie: [],
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        error: false,
        products: action.payload.items,
        categories: action.payload.categories,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        error: true,
        products: [],
        categories: [],
      };
    default:
      return {
        state,
      };
  }
}
