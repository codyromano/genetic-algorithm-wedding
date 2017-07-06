import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';
import Button from 'components/immutable/Button';
import styles from 'components/mutable/LandingPage/landingPage.css';

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
      <Friend {...friendData} fadeEffect={true} key={i}/>
    ));

    const inlineButton = {
      width: '20rem'
    };

    return (
      <div>
        <div className={styles.overlay}>
          <Button text="Start Genetic Experiment" style={inlineButton} href="/experiment"/>
        </div>
        <div className={styles.mosaic}>{friends}</div>
      </div>
    );
  }
}