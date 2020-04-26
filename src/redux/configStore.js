import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { rootEpics } from './epic';

import { book } from './reducer/Book';
import genre from './reducer/Genre';

const reducers = combineReducers({
  book,
  genre
});

const epicMiddleware = createEpicMiddleware();

const ConfigureStore = () => {
  const composeEnhancers = (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
  const store = createStore(
      reducers,
      {},
      composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpics);
  return store;
};

export default ConfigureStore;
