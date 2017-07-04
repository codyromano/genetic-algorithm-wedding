import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';

export default class LandingPage extends Component {
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
      <div>{friends}</div>
    );
  }
}