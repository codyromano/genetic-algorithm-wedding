/**
* @this GeneticExperiment
*/
export default function() {
  // Recalculate fitness
  this.genotypes.forEach(genotype => {
    genotype.fitness = this.fitness(genotype.entity);
  });

  // Find most fit pair
  const [ mother, father ] = this.selection(this.genotypes);

  // Remove least fit from population
  this.extinction(this.genotypes);

  // Add offsprint of most fit
  const [ daughter, son ] = this.crossover(mother, father);

  this.addGenotype(daughter);
  this.addGenotype(son);

  this.currentBest = this.getMostFit(mother, father, daughter, son);
  this.currentGeneration+= 1;

  this.onUpdate(
    this.currentGeneration,
    this.currentBest
  );
}