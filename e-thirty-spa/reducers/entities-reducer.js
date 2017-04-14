import { combineReducers } from 'redux';
import articlesReducer from './articles-reducer';
import bookmarksReducer from './bookmarks-reducer';

const entitiesReducer = combineReducers({
  articles: articlesReducer,
  bookmarks: bookmarksReducer,
});

export default entitiesReducer;
