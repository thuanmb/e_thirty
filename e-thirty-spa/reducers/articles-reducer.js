import { articleListReducer, getArticleEntities } from './common';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const ADD_ARTICLES = 'ADD_ARTICLES';

const articlesReducer = articleListReducer(REQUEST_ARTICLES, RECEIVE_ARTICLES, (state, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      let articles = action.response.data;
      articles = articles instanceof Array ? articles : [articles];
      const normalizedArticles = getArticleEntities(articles);

      return {
        ...state,
        byIds: {
          ...state.byIds,
          ...normalizedArticles.entities.articles,
        },
        usersByIds: {
          ...state.userByIds,
          ...normalizedArticles.entities.users,
        },
      };
    default:
      return state;
  }
});

export default articlesReducer;
