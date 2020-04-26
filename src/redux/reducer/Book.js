import { types } from '../actionTypes';

const initialState = {
  books: [],
  loading: false,
  fetched: false,
  error: null,
};

export const book = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BOOK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        books: action.payload,
      };
    case types.FETCH_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        fetched: false,
        error: action.payload
      };
    default:
      return state;
  }
};