import { ApiUrls } from './api-urls';

const getActionTypes = (actions, payload) => (
  actions instanceof Array ?
    actions.map((action) => ({ type: action, ...payload }))
    : { type: actions, ...payload }
);

export const fetchData = (beforeAction, afterAction, url) => (dispatch) => {
  const beforeActionTypes = getActionTypes(beforeAction);
  dispatch(beforeActionTypes);

  return $.ajax({
    url,
    type: 'GET',
    contentType: 'application/json',
  }).then((response) => {
    if (response.status === 'OK') {
      const afterActionTypes = getActionTypes(afterAction, { response });
      dispatch(afterActionTypes);
    }
  });
};

export const isSignedIn = () => (
  $.ajax({
    url: ApiUrls.Me,
    type: 'GET',
    contentType: 'application/json',
  })
);

export const bookmark = (articleId) => (
  $.ajax({
    url: ApiUrls.Bookmarks,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      article_id: articleId,
    }),
  })
);

export const getMyBookmark = () => (
  $.ajax({
    url: ApiUrls.Bookmarks,
    type: 'GET',
    contentType: 'application/json',
  })
);
