import sortByWeakness from 'experiment/helpers/sortByWeakness';

/**
* @returns {Array} Two weakest genotypes
*/
export default function(genotypes) {
  return genotypes.sort(sortByWeakness).slice(0, 2);
};