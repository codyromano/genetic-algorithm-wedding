import React, {Component} from 'react'; //eslint-disable-line
//import createExperiment from 'experiment/GeneticExperimentFactory';
import fitness from 'genetic-operators/fitness';
import survival from 'genetic-operators/survival';
//import getMockIndividual from 'experiment/helpers/getMockIndividual';

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