import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCHING,
} from "./../reducers/actions/common";
export const initialState = {
  loading: false,
  error: false,
  products: [],
};

export function productsReducer(state, action) {
  switch (action.type) {
    case FETCHING:
      return {
        loading: true,
        error: false,
        product: [],
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        error: false,
        products: action.payload,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        error: true,
        products: [],
      };
    default:
      return {
        state,
      };
  }
}
