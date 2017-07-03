import React, {Component} from 'react'; //eslint-disable-line
import createExperiment from 'experiment/GeneticExperimentFactory';

const experiment = createExperiment({
  onUpdate: function(...args) {
    console.log(...args);
  }
});
experiment.start();

console.log(experiment);

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
  experimentUpdated() {
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