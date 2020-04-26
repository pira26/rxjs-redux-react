import { useDispatch } from 'react-redux';
import { fetchGenre, fetchBook } from '../redux'

export const useActions = () => {
  const dispatch = useDispatch();
  
  const fetchBookAction = data => dispatch(fetchBook(data));
  const fetchGenreAction = () => dispatch(fetchGenre());
  
  return {
    fetchBookAction,
    fetchGenreAction
  }
};