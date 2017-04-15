import { REQUEST_ARTICLES, RECEIVE_ARTICLES, ADD_ARTICLES } from 'ReducersPath/articles-reducer';
import { ARTICLES_LOADED } from 'ReducersPath/common';
import { ApiUrls } from 'CorePath/api-urls';
import { fetchData } from 'CorePath/api';

export const fetchArticles = (page = 1) => (dispatch) => {
  fetchData(REQUEST_ARTICLES, [ADD_ARTICLES, RECEIVE_ARTICLES, ARTICLES_LOADED], ApiUrls.ArticlesIndex.getUrl({ page }))(dispatch);
};
