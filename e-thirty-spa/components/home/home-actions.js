import { REQUEST_ARTICLES, RECEIVE_ARTICLES } from 'ReducersPath/articles-reducer';
import { ApiUrls } from 'CorePath/api-urls';
import { fetchData } from 'CorePath/api';

export const fetchArticles = (page = 1) => (dispatch) => {
  fetchData(REQUEST_ARTICLES, RECEIVE_ARTICLES, ApiUrls.ArticlesIndex.getUrl({ page }))(dispatch);
};
