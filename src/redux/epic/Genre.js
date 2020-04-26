import { ofType } from 'redux-observable';
import { map, mergeMap, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { types } from '../actionTypes'
import { DataService, endPoints } from '../../api';

export const fetchGenreEpic = action$ => action$.pipe(
    ofType(types.FETCH_GENRE_REQUEST),
    mergeMap(() => {
      return DataService.request(endPoints.GENRE).pipe(
          delay(1000),
          map(({data}) => {
            return {
              type: types.FETCH_GENRE_SUCCESS, payload: data.genres
            };
          }),
          catchError(() => of({
                type: types.FETCH_GENRE_ERROR,
                payload: 'Something went wrong!! 🙈👀😅',
                error: true
              })
          ),
      );
    }),
);