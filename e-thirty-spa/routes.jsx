import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from 'CorePath/store';
import App from './pages/app';
import Authorized from './pages/authorized/authorized';
import NoMatch from './components/404/404';
import Home from './components/home/home';

const Routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route component={Authorized}>
        <IndexRoute component={Home} />
      </Route>
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
);
export default Routes;
