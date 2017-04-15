import { articleListReducer } from './common';

export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

const searchResultsReducer = articleListReducer(REQUEST_SEARCH_RESULTS, RECEIVE_SEARCH_RESULTS, (state, action) => {
  switch (action.type) {
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: false,
        hasMore: false,
        byIds: {},
        allIds: [],
      };
    default:
      return state;
  }
});

export default searchResultsReducer;
