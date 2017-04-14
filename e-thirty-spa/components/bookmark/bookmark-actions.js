import { REQUEST_BOOKMARKS, RECEIVE_BOOKMARKS } from 'ReducersPath/bookmarks-reducer';
import { ApiUrls } from 'CorePath/api-urls';
import { fetchData } from 'CorePath/api';

export const fetchMyFavouriteArticles = (page = 1) => (dispatch) => {
  fetchData(REQUEST_BOOKMARKS, RECEIVE_BOOKMARKS, ApiUrls.BookmarksIndex.getUrl({ page }))(dispatch);
};
