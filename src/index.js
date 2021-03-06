import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Service from './Service';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  (<Router history={browserHistory}>
    <Switch>
      <Route exact path="/">
        <App/>
      </Route>
      <Route path="/service">
        <Service/>
      </Route>
    </Switch>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
