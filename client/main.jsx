import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import About from '../imports/ui/About.jsx';

function requireAuth(nextState, replace) {
  if (Meteor.user() === null) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="about" component={About} onEnter={requireAuth} />
  </Router>
), document.body)
