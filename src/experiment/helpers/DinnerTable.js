import { variance } from 'utils';
import config from 'experiment/config';

const { guestsPerTable, fitnessFeatures } = config;

export default class DinnerTable {
  // The features represent political affiliation, sports, etc.
  constructor() {
    this.totalPeople = 0;
    this.maxPeople = guestsPerTable;

    this.features = this.getFeatureComparisonObject(
      Object.keys(fitnessFeatures)
    );
  }

  isFull() {
    return this.totalPeople >= this.maxPeople;
  }

  getFeatureComparisonObject(featuresArray) {
    // Generate an object mapping feature names to empty arrays
    // We'll use this to compute the variance
    return featuresArray.reduce((featuresMap, name) => {
      featuresMap[name] = [];
      return featuresMap;
    }, {});
  }

  addPerson(person) {
    for (const [name, value] of Object.entries(person.features)) {
      this.features[name].push(value);
    }
    this.totalPeople+= 1;
  }

  getFitness() {
    let totalVariance = 0;

    for (const [name, sampleData] of Object.entries(this.features)) {
      totalVariance+= variance(sampleData);
    }

    return totalVariance;
  }
}