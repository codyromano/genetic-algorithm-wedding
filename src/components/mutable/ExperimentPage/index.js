import React, { Component } from 'react'; // eslint-disable-line
import { onExperimentReady, createExperiment } from 'experiment/GeneticExperimentFactory';
import Friend from 'components/Friend';
import DinnerTable from 'components/immutable/DinnerTable';
import styles from 'components/mutable/ExperimentPage/experimentPage.css';
import ExperimentStatus from 'components/immutable/ExperimentStatus';
import { debouncer } from 'utils';
import config from 'experiment/config';

export default class ExperimentPage extends Component {
  constructor() {
    super();
    this.state = {
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
    /*
    const onUpdate = debouncer(
      this.experimentDidUpdate.bind(this),
      1
    );
    */

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

  getFriendsInGenotypeByTable(genotype) {
    const tableData = [];
    let currentTable = [];

    genotype.entity.map((friendData, i) => {
      const friend = (<Friend {...friendData} key={i}/>);

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


    return (
      <div>
        <ExperimentStatus
          generation={generation}
          fitness={bestGenotype && bestGenotype.fitness}
          text={status}
        />
        {tables}
      </div>
    );
  }
}