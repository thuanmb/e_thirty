import { REQUEST_ARTICLES, ADD_ARTICLES } from 'ReducersPath/articles-reducer';
import { ARTICLES_LOADED } from 'ReducersPath/common';
import { ApiUrls } from 'CorePath/api-urls';
import { fetchData } from 'CorePath/api';

export const getArticle = (id) => (dispatch) => {
  fetchData(REQUEST_ARTICLES, [ADD_ARTICLES, ARTICLES_LOADED], ApiUrls.ArticleDetails.getUrl({ id }))(dispatch);
};
