import survival from 'genetic-operators/survival';

// Weakness is the opposite of fitness, so we only need to
// negate the survival function
const sortByWeakness = (...args) => !survival(...args);

/**
* @returns {Array} Two weakest genotypes
*/
export default function(genotypes) {
  // TODO: Room for optimization here.
  // We can splice weakest with one iteration
  const weakIDs = genotypes
    .sort(sortByWeakness)
    .slice(0, 2)
    .map(item => item.entity.id);

  genotypes.forEach((genotype, i, array) => {
    if (weakIDs.includes(genotype.entity.id)) {
      array.splice(i, 1);
    } 
  });

  return genotypes;
}