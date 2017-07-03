import validate from 'validation/ValidatorFactory';

export default class GeneticExperiment {
  constructor(config) {

    Object.assign(this, config);

    validate().shapeOf(this, {
      crossover: 'function',
      mutate: 'function',
      seed: 'function',
      fitness: 'function'
    });
  }
}