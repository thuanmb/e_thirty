import { ApiUrls } from './api-urls';

export const fetchData = (beforeAction, afterAction, url) => (dispatch) => {
  dispatch({
    type: beforeAction,
  });

  return $.ajax({
    url,
    type: 'GET',
    contentType: 'application/json',
  }).then((response) => {
    if (response.status === 'OK') {
      dispatch({
        type: afterAction,
        response,
      });
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
