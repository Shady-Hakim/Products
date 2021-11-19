import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from './productsTypes';

export const fetchListRequest = () => {
  return {
    type: FETCH_LIST_REQUEST,
  };
};

export const fetchListSuccess = productsList => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: productsList,
  };
};

export const fetchListfailure = error => {
  return {
    type: FETCH_LIST_FAILURE,
    payload: error,
  };
};
