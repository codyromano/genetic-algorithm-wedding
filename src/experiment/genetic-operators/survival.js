/**
* @desc Given two genotypes, survival determines which genotypes
* is more fit.
*/
export default function(genotypeA, genotypeB) {
  // Lower fitness is better. It means there's a low variance in the
  // preferences of guests at the dinner table
  return genotypeA.fitness < genotypeB.fitness ? genotypeA : genotypeB;
}