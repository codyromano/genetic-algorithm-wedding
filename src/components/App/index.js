import React, {Component} from 'react'; //eslint-disable-line
import createExperiment from 'experiment/GeneticExperimentFactory';
import { getFriends } from 'stores/friendStore';

getFriends(200).then(friends => {
  console.log(friends);
}, err => console.error(err));

//import fitness from 'genetic-operators/fitness';
//import survival from 'genetic-operators/survival';
//import getMockIndividual from 'experiment/helpers/getMockIndividual';

/*
let previousBest = {
  entity: null,
  fitness: window.Infinity
};
const experiment = createExperiment({
  onUpdate: function(generation, best, message) {

    if (best.fitness < previousBest.fitness) {
      previousBest = best;
      console.log(`%cNew winner! Score: ${best.fitness}`, 'color: green');
    }
    if (message && message.toLowerCase().includes('optimal')) {
      console.log(`%c${message}`, 'font-size:15px;color:blue');
    }
    if (generation % 100 === 0) {
      console.log(`%cSimulation #${generation}`, 'color: #555');
    }
  }
});

experiment.start();
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