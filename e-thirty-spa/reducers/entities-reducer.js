import { combineReducers } from 'redux';
import articlesReducer from './articles-reducer';

const entitiesReducer = combineReducers({
  articles: articlesReducer,
});

export default entitiesReducer;
