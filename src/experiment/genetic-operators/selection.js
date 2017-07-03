const sortByFitness = (genA, genB) => genA.fitness > genB.fitness;

export default function(genotypes) {
  return genotypes.sort(sortByFitness).slice(0, 2);
};