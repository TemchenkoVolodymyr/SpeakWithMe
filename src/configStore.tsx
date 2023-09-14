import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import { initialState } from './Redux/initialState';
import reducer from './Redux/combineRoot';


const store = createStore(reducer, initialState,
  compose(
    applyMiddleware(thunk)
  )
);

export type RootState  = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export default store;
