import { articleListReducer } from './common';

export const REQUEST_BOOKMARKS = 'REQUEST_BOOKMARKS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';

const bookmarksReducer = articleListReducer(REQUEST_BOOKMARKS, RECEIVE_BOOKMARKS, (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
});

export default bookmarksReducer;
