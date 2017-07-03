import validate from 'validation/ValidatorFactory';
import GeneticShape from 'validation/shapes/GeneticExperimentShape';

export default class GeneticExperiment {
  constructor(config) {
    // Assign user-provided genetic operators (seed, fitness, etc.)
    Object.assign(this, config);

    // Validate the operators
    validate().shapeOf(this, GeneticShape);

    this.genotypes = [];
  }

  initPopulation() {
    if (this.genotypes.length) {
      console.warn('Initalizing a previously initialized population');
    }
    for (let i=0; i<this.maxGenotypes; i++) {
      this.genotypes.push(
        this.seed()
      );
    }
  }
}