import { types } from '../actionTypes';

const initialState = {
  genres: [],
  loading: false,
  fetched: false,
  error: null,
};

const genre = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GENRE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        genres: action.payload,
      };
    case types.FETCH_GENRE_ERROR:
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

export default genre;