import React, {Component} from 'react'; //eslint-disable-line
import createExperiment from 'experiment/GeneticExperimentFactory';
import { getFriends } from 'stores/friendStore';

import Friend from 'components/Friend'; //eslint-disable-line

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
    const friends = this.state.friends.map(friendData => (
      <Friend {...friendData}/>
    ));

    return (
      <main>{friends}</main>
    );
  }
}

// TODO: Proptypes