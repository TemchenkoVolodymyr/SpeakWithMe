import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import { initialState } from './initialState';
import reducer from './combineRoot';


const store = createStore(reducer, initialState,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;
