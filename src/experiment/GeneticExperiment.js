import validate from 'validation/ValidatorFactory';
import GeneticShape from 'validation/shapes/GeneticExperimentShape';
import evolve from 'genetic-operators/evolve';
import optimal from 'genetic-operators/optimal';
import evolutionCycle from 'experiment/evolutionCycle';

export default class GeneticExperiment {
  constructor(config) {
    // Assign user-provided genetic operators (seed, fitness, etc.)
    // See GeneticShape for an overview of required operators
    Object.assign(this, config);

    // Validate config options
    validate().shapeOf(this, GeneticShape);

    // Optional genetic operators
    this.evolve = evolve.bind(this);
    this.optimal = optimal.bind(this);

    this.evolving = false;
    this.currentGeneration = 1;
    this.currentBest = null;
  }

  initPopulation() {
    this.genotypes = [];

    for (let i=0; i<this.maxGenotypes; i++) {
      // Initial population may be undefined depending on the experiment
      this.addGenotype(
        this.seed(this.initialPopulation)
      );
    }
    this.calculateInitialFitness();
    this.onUpdate(
      this.currentGeneration,
      this.getBest(),
      `Initialized population with ${this.genotypes.length} genotypes`
    );
  }

  calculateInitialFitness() {
    // Recalculate fitness
    this.genotypes.forEach(genotype => {
      genotype.fitness = this.fitness(genotype);

      // TODO: Refactor
      if (!this.currentBest || this.currentBest.fitness > genotype.fitness) {
        this.currentBest = genotype;
      }
    });
  }

  addGenotype(entity) {
    const genotype = {
      entity,
      fitness: 0
    };
    genotype.fitness = this.fitness(genotype);
    return this.genotypes.push(genotype);
  }

  getBest() {
    return this.currentBest;
  }

  start() {
    // Reset the experiment if it's already running
    this.initPopulation();
    this.evolving = true;
    evolutionCycle.call(this, this.evolve);
  }
  pause() {
    this.evolving = false;
  }
}