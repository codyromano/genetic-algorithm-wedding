import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady, createExperiment } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';
import DinnerTable from 'components/immutable/DinnerTable';
import styles from 'components/mutable/ExperimentPage/experimentPage.css'; // eslint-disable-line
import ExperimentStatus from 'components/immutable/ExperimentStatus';
import config from 'experiment/config';
import Beaker from 'components/immutable/Beaker';

export default class ExperimentPage extends Component {
  constructor() {
    super();
    this.state = {
      status: '',
      bestGenotype: null,
      generation: 0,
      selectedGeneId: null
    };
    this.onGeneClick = this.onGeneClick.bind(this);
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
    onExperimentReady(friends => {
      this.setState({
        friends,
        status: 'Population initialized'
      });

      this.experiment = createExperiment({
        onUpdate: this.experimentDidUpdate.bind(this)
      });
      this.experiment.start();
    });
  }

  onGeneClick(id) {
    this.setState({
      selectedGeneId: id
    });
  }

  getFriendsInGenotypeByTable(genotype) {
    const tableData = [];
    let currentTable = [];

    genotype.entity.map((friendData, i) => {
      const isSelected = this.state.selectedGeneId === friendData.id;
      const friend = (
        <Friend
          {...friendData}
          key={i}
          onClick={this.onGeneClick}
          showFeatureSet={isSelected}
        />
      );

      currentTable.push(friend);

      if (currentTable.length >= config.guestsPerTable) {
        tableData.push(currentTable);
        currentTable = [];
      }
    });

    return tableData.map((guests, i) => (
      <DinnerTable friends={guests} key={i}/>
    ));
  }

  render() {
    const { status, generation, bestGenotype } = this.state;

    const tables = bestGenotype &&
      this.getFriendsInGenotypeByTable(bestGenotype);

    const beakerProps = {
      percentFilled: Math.round((generation / config.maxGenerations) * 100),
      spawnFrequency: 50,
      width: 100,
      height: 100,
      bubbleOptions: {
        radius: 10
      }
    };

    return (
      <div className={styles.experiment}>
        <Beaker {...beakerProps}/>
        <ExperimentStatus
          generation={generation}
          fitness={bestGenotype && bestGenotype.fitness || 0}
          text={status}
        />
        {tables}
      </div>
    );
  }
}