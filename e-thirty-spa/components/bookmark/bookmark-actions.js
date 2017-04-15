import { REQUEST_BOOKMARKS, RECEIVE_BOOKMARKS } from 'ReducersPath/bookmarks-reducer';
import { ADD_ARTICLES } from 'ReducersPath/articles-reducer';
import { ARTICLES_LOADED } from 'ReducersPath/common';
import { ApiUrls } from 'CorePath/api-urls';
import { fetchData } from 'CorePath/api';

export const fetchMyFavouriteArticles = (page = 1) => (dispatch) => {
  fetchData(REQUEST_BOOKMARKS, [ADD_ARTICLES, RECEIVE_BOOKMARKS, ARTICLES_LOADED], ApiUrls.BookmarksIndex.getUrl({ page }))(dispatch);
};
