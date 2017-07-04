import React, {Component} from 'react'; //eslint-disable-line
import { onExperimentReady, createExperiment } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend'; //eslint-disable-line
import DinnerTable from 'components/immutable/DinnerTable';

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

    selfBindMethods(this, 'onFriendDataResponse');
  }

  experimentNotification(generation, best, message) {
    console.log(generation);
    if (message) {
      console.log(message);
      console.log(best);
    }
  }

  onFriendDataResponse(friends) {
    this.setState({friends});
  }

  componentDidMount() {
    onExperimentReady(population => {
      this.onFriendDataResponse(population);

      this.experiment = createExperiment({
        onUpdate: this.experimentNotification
      });
      this.experiment.start();
    });
  }
  render() {
    const friends = this.state.friends.map((friendData, i) => (
      <Friend {...friendData} key={i}/>
    ));

    return (
      <main>
        {friends}
        <DinnerTable friends={[]}/>
      </main>
    );
  }
}

// TODO: Proptypes