import { combineReducers } from 'redux';
import articlesReducer from './articles-reducer';
import bookmarksReducer from './bookmarks-reducer';
import searchResultsReducer from './search-results-reducer';

const entitiesReducer = combineReducers({
  articles: articlesReducer,
  bookmarks: bookmarksReducer,
  searchResults: searchResultsReducer,
});

export default entitiesReducer;
