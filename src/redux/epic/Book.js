import { ofType } from 'redux-observable';
import { delay, map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { types } from '../actionTypes'
import { DataService, endPoints } from '../../api';

export const fetchBookEpic = action$ => action$.pipe(
    ofType(types.FETCH_BOOK_REQUEST),
    mergeMap(({payload}) => {
      return DataService.request(endPoints.BOOK).pipe(
          delay(1000),
          map(({data}) => {
            const {genre, filter} = payload;
            let books = data.books.sort((a, b) => a.name < b.name ? -1 : 1);
            if (genre) {
              books = books.filter(b => b.genre === genre);
            }
            if (filter) {
              books = books.filter(b => {
                return b.name.toLowerCase().includes(filter.toLowerCase()) ||
                    b.author.toLowerCase().includes(filter.toLowerCase());
              });
            }
            return {type: types.FETCH_BOOK_SUCCESS, payload: books};
          }),
          catchError(() => of({
                type: types.FETCH_BOOK_ERROR,
                payload: 'Something went wrong!! 🙈👀😅',
                error: true
              })
          ),
      );
    }),
);