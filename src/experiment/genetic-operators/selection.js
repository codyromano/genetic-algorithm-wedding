import sortByFitness from 'experiment/helpers/sortByFitness';

export default function(genotypes) {
  return genotypes.sort(sortByFitness).slice(0, 2);
};