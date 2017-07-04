import React, {Component} from 'react'; //eslint-disable-line

import createExperiment from 'experiment/GeneticExperimentFactory';
import getMockPopulation from 'experiment/helpers/getMockPopulation';
import config from 'experiment/config';

import { getFriends } from 'stores/friendStore';
import Friend from 'components/Friend'; //eslint-disable-line

let previousBest = {
  fitness: window.Infinity,
  entity: null
};

getMockPopulation(config.populationSize).then(initialPopulation => {
  const experiment = createExperiment({
    initialPopulation,
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

  console.log(experiment);

  experiment.start();
});


// TODO: Move to utils
const selfBindMethods = (context, ...methodNames) => {
  methodNames.forEach(name => {
    context[name] = context[name].bind(context);
  });
};

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };

    selfBindMethods(this, 'onFriendDataResponse', 'onFriendDataError');
  }
  experimentUpdated() {
    //console.log(...args);
  }
  onFriendDataResponse(friends) {
    this.setState({friends});
  }
  onFriendDataError(errorMsg) {
    console.error(`There's a network error, and I hope this isn't happening
      during a live demo...${errorMsg}`);
  }

  componentDidMount() {
    getFriends(500).then(
      this.onFriendDataResponse,
      this.onFriendDataError
    );
  }
  render() {
    const friends = this.state.friends.map((friendData, i) => (
      <Friend {...friendData} key={i}/>
    ));

    return (
      <main>{friends}</main>
    );
  }
}

// TODO: Proptypes