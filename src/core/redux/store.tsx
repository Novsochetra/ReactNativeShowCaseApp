import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { sagaMonitor } from '../../ReactotronConfig';

import rootReducer from './rootReducer';
// import rootSaga from '../saga';

let _store: any | null = null;

/**
 * Called to get redux store from where you can dispatch action and get state
 */
export const getReduxStore = () => {
  return _store;
};

/**
 * Called to get redux state
 */
export const getReduxState = () => {
  return _store.getState();
};

/**
 * Default function to build redux store
 */

export const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = applyMiddleware(sagaMiddleware);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(middlewares);

  const store = createStore(rootReducer, enhancers);

  _store = store;

  // you custom saga action like rootSaga
  // sagaMiddleware.run(rootSaga);

  return { store };
};
