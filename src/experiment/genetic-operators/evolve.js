import sassy from 'experiment/helpers/sassy';

/**
* @this GeneticExperiment
*/
export default function(next) {
  // Find most fit pair
  const [ mother, father ] = this.selection(this.genotypes);

  // Remove least fit from population
  this.extinction(this.genotypes);

  // TODO: Use random
  const shouldMutate = true;

  // Add offsprint of most fit
  const [ daughter, son ] = this.crossover(mother, father);
  if (shouldMutate) {
    [daughter, son].forEach(genotype => this.mutate(genotype));
  }

  // TODO: Use a Genotypes class
  this.genotypes.push(daughter);
  this.genotypes.push(son);

  const eliteGroup = [mother, father, daughter, son];
  eliteGroup.forEach(member => {
    if (this.currentBest && member.fitness < this.currentBest.fitness) {
      this.currentBest = member;

      const name = this.currentBest.entity[0].firstName;

      this.onUpdate(
        this.currentGeneration,
        this.currentBest,
        sassy(name)
        //'Found new best seating arrangement!'
      );
    }
    // We're done...the fitness can't get any better!
    if (this.optimal(member)) {
      this.onUpdate(
        this.currentGeneration,
        this.currentBest,
        'Optimal seating arrangement discovered!'
      );
      console.log(this.currentBest);
      this.pause();
    }
  });

  this.currentGeneration+= 1;

  this.onUpdate(
    this.currentGeneration,
    this.currentBest,
    null,
    this.genotypes
  );

  next();
}