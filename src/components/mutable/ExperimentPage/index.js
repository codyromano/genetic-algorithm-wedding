import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady, createExperiment } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';
import styles from 'components/mutable/ExperimentPage/experimentPage.css';
import ExperimentStatus from 'components/immutable/ExperimentStatus';
import { debouncer } from 'utils';

export default class ExperimentPage extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      status: '',
      bestGenotype: null,
      generation: 0
    };
  }
  experimentDidUpdate(generation, bestGenotype, status) {
    let newState = {
      generation,
      bestGenotype
    };

    if (status) {
      newState.status = status;
    }
    this.setState(newState);
  }
  componentDidMount() {
    // Limit frequency of setState calls
    const onUpdate = debouncer(
      this.experimentDidUpdate.bind(this),
      2000
    );

    onExperimentReady(friends => {
      this.setState({
        friends,
        status: 'Population initialized'
      });

      this.experiment = createExperiment({onUpdate});
      this.experiment.start();
    });
  }
  render() {
    const { status, generation } = this.state;
    const friends = this.state.friends.map((friendData, i) => (
      <Friend {...friendData} key={i}/>
    ));

    return (
      <div>
        <ExperimentStatus generation={generation} text={status}/>
      </div>
    );
  }
}