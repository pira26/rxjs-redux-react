import { types } from '../actionTypes';

export const fetchBook = data => ({type: types.FETCH_BOOK_REQUEST, payload: data});