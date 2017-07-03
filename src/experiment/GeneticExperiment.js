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
      console.warn('Population already intialized');
    }
    for (let i=0; i<this.maxGenotypes; i++) {
      const entity = this.seed();

      this.genotypes.push({
        entity,
        fitness: this.fitness(entity)
      });
    }
  }
}