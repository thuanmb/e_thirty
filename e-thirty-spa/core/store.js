import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createLogger from 'redux-logger';
import rootReducer from '../root-reducer';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, multi, createLogger()),
);

const store = createStore(rootReducer, {}, enhancer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
