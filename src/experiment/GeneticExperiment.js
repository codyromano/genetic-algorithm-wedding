import validate from 'validation/ValidatorFactory';
import GeneticShape from 'validation/shapes/GeneticExperimentShape';
import evolve from 'genetic-operators/evolve';

/**
* @private
* @this GeneticExperiment
*/
function evolutionCycle() {
  const { currentGeneration, maxGenerations, evolving } = this;

  if (evolving && currentGeneration < maxGenerations) {
    evolve.call(this);
    setTimeout(() => evolutionCycle.call(this), 0);
  } else {
    this.evolving = false;
  }
}

export default class GeneticExperiment {
  constructor(config) {
    // Assign user-provided genetic operators (seed, fitness, etc.)
    Object.assign(this, config);

    // Validate config options
    validate().shapeOf(this, GeneticShape);
    this.evolve = evolve.bind(this);

    this.evolving = false;
    this.currentGeneration = 1;
    this.currentBest = null;
  }

  initPopulation() {
    this.genotypes = [];

    for (let i=0; i<this.maxGenotypes; i++) {
      this.addGenotype(
        this.seed()
      );
    }
  }

  addGenotype(entity) {
    const fitness = this.fitness(entity);
    return this.genotypes.push({
      entity,
      fitness
    });
  }

  getBest() {
    return this.currentBest;
  }

  getMostFit(...genotypes) {
    let mostFit = arguments[0];

    genotypes.forEach(genotype => {
      if (genotype.fitness > mostFit.fitness) {
        mostFit = genotype;
      }
    });

    return mostFit;
  }

  start() {
    // Reset the experiment if it's already running
    this.initPopulation();
    this.evolving = true;
    evolutionCycle.call(this);
  }
  pause() {
    this.evolving = false;
  }
}