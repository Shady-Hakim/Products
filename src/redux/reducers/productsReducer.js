import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from '../actions/productsTypes';

const initialState = {
  loading: false,
  productsList: [],
  error: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        loading: false,
        productsList: action.payload || state.productsList,
        error: '',
      };
    case FETCH_LIST_FAILURE:
      return {
        loading: false,
        productsList: [],
        error: action.payload || state.error,
      };
  }
};
export default productsReducer;
