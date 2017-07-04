/**
* @returns {Boolean} If a genotype is optimal
*/
export default function(genotype) {
  if (genotype.fitness.toString().includes('e')) {
    return true;
  }
  return genotype.fitness <= 0;
}