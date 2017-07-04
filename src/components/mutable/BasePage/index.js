import React, { Component } from 'react'; // eslint-disable-line
import { Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ExperimentPage from 'pages/ExperimentPage';

export default class BasePage extends Component {
  render() {
    return (
      <Switch>
        <Route path="/experiment" component={ExperimentPage}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
    );
  }
}