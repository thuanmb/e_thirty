import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Store, { history } from 'CorePath/store';
import { isSignedIn } from 'Api';
import App from './pages/app';
import Authorized from './pages/authorized/authorized';
import NoMatch from './components/404/404';
import Home from './components/home/home';
import Article from './components/article/article';
import Bookmark from './components/bookmark/bookmark';
import SearchResult from './components/search-result/search-result';
import { LOGGED_IN } from './reducers/user-reducer';

const checkAuth = (nextState, replace, callback) => {
  isSignedIn()
    .then((responses) => {
      Store.dispatch({
        type: LOGGED_IN,
        user: responses.data,
      });
      callback();
    });
};

const Routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route component={Authorized} onEnter={checkAuth}>
        <IndexRoute component={Home} />
        <Route path="articles/:id" component={Article} />
        <Route path="bookmarks" component={Bookmark} />
        <Route path="search-results/:query" component={SearchResult} />
      </Route>
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
);
export default Routes;
