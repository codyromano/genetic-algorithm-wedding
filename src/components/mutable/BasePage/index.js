import React, { Component } from 'react'; // eslint-disable-line
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';

export default class BasePage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={LandingPage}/>
      </Switch>
    );
  }
}