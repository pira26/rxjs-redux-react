import { combineEpics } from 'redux-observable';

import { fetchBookEpic } from './Book';
import { fetchGenreEpic } from './Genre';

export const rootEpics = combineEpics(fetchBookEpic, fetchGenreEpic);