/**
* @returns {Object} The more fit genotype
*/
export default function(genotypeA, genotypeB) {
  return genotypeA.fitness > genotypeB.fitness;
};