import { REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS } from 'ReducersPath/search-results-reducer';
import { ADD_ARTICLES } from 'ReducersPath/articles-reducer';
import { ARTICLES_LOADED } from 'ReducersPath/common';
import { ApiUrls } from 'CorePath/api-urls';
import { fetchData } from 'CorePath/api';

export const fetchSearchedArticles = (page = 1, query = '') => (dispatch) => {
  fetchData(REQUEST_SEARCH_RESULTS, [ADD_ARTICLES, RECEIVE_SEARCH_RESULTS, ARTICLES_LOADED], ApiUrls.SearchResult.getUrl({ page, query }))(dispatch);
};
