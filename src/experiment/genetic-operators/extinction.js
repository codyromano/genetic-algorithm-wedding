import sortByWeakness from 'experiment/helpers/sortByWeakness';

/**
* @returns {Array} Two weakest genotypes
*/
export default function(genotypes) {
  // TODO: Room for optimization here.
  // We can splice weakest with one iteration
  const weakIDs = genotypes
    .sort(sortByWeakness)
    .slice(0, 2)
    .map(item => item.id);

  genotypes.forEach((genotype, i, array) => {
    if (weakIDs.includes(genotype.id)) {
      array.splice(i, 1);
    } 
  });

  return genotypes;
}