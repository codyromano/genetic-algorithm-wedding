import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';
import styles from 'components/mutable/ExperimentPage/experimentPage.css';
import ExperimentStatus from 'components/immutable/ExperimentStatus';

export default class ExperimentPage extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      status: ''
    };
  }
  componentDidMount() {
    onExperimentReady(friends => {
      this.setState({
        friends,
        status: 'Population initialized'
      });
    });
  }
  render() {
    const friends = this.state.friends.map((friendData, i) => (
      <Friend {...friendData} key={i}/>
    ));

    return (
      <div>
        <ExperimentStatus text={this.state.status}/>
      </div>
    );
  }
}