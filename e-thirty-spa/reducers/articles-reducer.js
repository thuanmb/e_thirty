export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

const articlesReducer = (state = { isLoading: false, data: [] }, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isLoading: true,
      };

    case RECEIVE_ARTICLES:
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data,
          ...action.response.data,
        ],
      };
    default:
      return state;
  }
};

export default articlesReducer;
