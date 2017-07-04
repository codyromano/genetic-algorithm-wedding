import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';
import styles from 'components/mutable/ExperimentPage/experimentPage.css';

export default class ExperimentPage extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    onExperimentReady(friends => {
      this.setState({friends});
    });
  }
  render() {
    const friends = this.state.friends.map((friendData, i) => (
      <Friend {...friendData} key={i}/>
    ));

    return (
      <div>
        Experiment
      </div>
    );
  }
}