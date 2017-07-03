import validate from 'validation/ValidatorFactory';
import GeneticShape from 'validation/shapes/GeneticExperimentShape';

export default class GeneticExperiment {
  constructor(config) {
    // Assign user-provided genetic operators (seed, fitness, etc.)
    Object.assign(this, config);

    // Validate config options
    validate().shapeOf(this, GeneticShape);
  }

  initPopulation() {
    this.genotypes = [];

    for (let i=0; i<this.maxGenotypes; i++) {
      const entity = this.seed();
      const fitness = this.fitness(entity);

      this.genotypes.push({entity, fitness});
    }
  }

  evolve() {
    const [ mother, father ] = this.selection(this.genotypes);
    const [ daughter, son ] = this.crossover(mother, father);
  }

  start() {
    this.initPopulation();
  }
}