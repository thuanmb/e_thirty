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
