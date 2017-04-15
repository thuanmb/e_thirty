import { normalize } from 'normalizr';
import { article } from './types';

export const ARTICLES_LOADED = 'ARTICLES_LOADED';
export const getArticleEntities = (data) => {
  const articlesData = { articles: data };
  const articlesSchema = { articles: [article] };
  return normalize(articlesData, articlesSchema);
};

export const articleListReducer = (requestAction, receiveAction, defaultReducer) => (
  (state = { isLoading: false, hasMore: false, byIds: {}, allIds: [], usersByIds: {} }, action) => {
    switch (action.type) {
      case requestAction:
        return {
          ...state,
          isLoading: true,
        };

      case receiveAction:
        let articles = action.response.data;
        articles = articles instanceof Array ? articles : [articles];
        const normalizedArticles = getArticleEntities(articles);
        return {
          ...state,
          hasMore: articles.length > 0,
          allIds: [
            ...state.allIds,
            ...normalizedArticles.result.articles,
          ],
        };
      case ARTICLES_LOADED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return defaultReducer(state, action);
    }
  }
);
