import { fullApiPath } from './config';

const ApiObject = (url) => {
  const getUrl = (params) => {
    let result = url;
    Object.keys(params).forEach((paramName) => {
      result = result.replace(`:${paramName}`, params[paramName]);
    });
    return result;
  };

  return {
    rawUrl: url,
    getUrl,
  };
};

export const ApiUrls = {
  ArticlesIndex: ApiObject(`${fullApiPath}/articles?page=:page`),
  Me: `${fullApiPath}/users/me`,
  Bookmarks: `${fullApiPath}/bookmarks`,
  BookmarksIndex: ApiObject(`${fullApiPath}/bookmarks?page=:page`),
  SearchResult: ApiObject(`${fullApiPath}/articles?page=:page&query=:query`),
  ArticleDetails: ApiObject(`${fullApiPath}/articles/:id`),
};
