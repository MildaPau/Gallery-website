import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import mainReducer from './main-reducer';

const reduxMiddlewareEnhancer = applyMiddleware(thunk);
const reduxDevToolEnhancer = composeWithDevTools();
const joinedEnhancer = compose(reduxMiddlewareEnhancer, reduxDevToolEnhancer);

const store = createStore(
  mainReducer,
  joinedEnhancer,
);

export default store;
