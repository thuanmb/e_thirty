import { normalize, schema } from 'normalizr';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

const article = new schema.Entity('articles');

const getArticleEntities = (data) => {
  const articlesData = { articles: data };
  const articlesSchema = { articles: [article] };
  return normalize(articlesData, articlesSchema);
};

const articlesReducer = (state = { isLoading: false, byIds: {}, allIds: [] }, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isLoading: true,
      };

    case RECEIVE_ARTICLES:
      const normalizedArticles = getArticleEntities(action.response.data);
      return {
        ...state,
        isLoading: false,
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

export default articlesReducer;
