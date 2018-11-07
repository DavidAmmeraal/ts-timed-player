/**
 * store.ts
 * Store for StagePlayer
 */
import Types from 'Types';

import { applyMiddleware, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as rootReducer } from './reducer';
import { epics as rootEpic } from './epics';
import { services } from '../services/index';

const epicMiddleware = createEpicMiddleware<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
>({
  dependencies: services,
});

export function configureStore(initialState: {}): Store<Types.RootState> {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(epicMiddleware)),
  );
  epicMiddleware.run(rootEpic);
  return store;
}
