import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Login from '@client/page/verify/Login.jsx';
import Layout from '@client/page/layout/Main.jsx';
import Test from '@client/page/test/Index.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    )
  }
}

