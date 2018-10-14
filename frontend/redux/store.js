import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';

const defaultState = {
  images: [],
  imagedata: [],
};

export function initializeStore(initialState = defaultState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware)))
}