import { normalize } from 'normalizr';
import { article } from './types';

export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';

const getArticleEntities = (data) => {
  const articlesData = { articles: data };
  const articlesSchema = { articles: [article] };
  return normalize(articlesData, articlesSchema);
};

const bookmarksReducer = (state = { isLoading: false, byIds: {}, allIds: [] }, action) => {
  switch (action.type) {
    case REQUEST_BOOKMARKS:
      return {
        ...state,
        isLoading: true,
      };

    case RECEIVE_BOOKMARKS:
      const articles = action.response.data;
      const normalizedArticles = getArticleEntities(articles);
      return {
        ...state,
        isLoading: false,
        hasMore: articles.length > 0,
        byIds: {
          ...state.byIds,
          ...normalizedArticles.entities.articles,
        },
        allIds: [
          ...state.allIds,
          ...normalizedArticles.result.articles,
        ],
      };
    default:
      return state;
  }
};

export default bookmarksReducer;
