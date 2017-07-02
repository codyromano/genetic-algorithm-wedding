import React, {Component} from 'react';
// TODO: Use webpack alias instead of relative path
/*
import {
  create as createExperiment,
  start as startExperiment
} from '../../experiment/index';
*/


export default class App extends Component {
  constructor() {
    super();

    /*
    this.state = {
      experiment: {}
    };
    this.experimentUpdated = this.experimentUpdated.bind(this); 
    */
  }
  experimentUpdated(...args) {
    //console.log(...args);
  }
  componentDidMount() {
    /*
    this.setState({
      experiment: createExperiment(
        this.experimentUpdated
      )
    });
    startExperiment(this.state.experiment);
    */
  }
  render() {
    return (
      <main>App</main>
    );
  }
}

// TODO: Proptypes