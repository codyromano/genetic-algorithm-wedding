import { rand, arraySwap } from 'utils';
import config from 'experiment/config';

/**
* @module mutate
* @desc Mutate a genotype to ensure genetic diversity. In this case
* we use a simple "swap gene" strategy because it works well with
* permutation problems; order matters because it represents the
* table at which a guest is sitting.
*/
export default function(genotype) {
  const { length } = genotype.entity;

  // Swap x% of the genes or 1 gene - whichever is greater
  const x = config.mutationPercent;
  const totalSwaps = Math.max(1, Math.floor(length * x));
  let swapsMade = 0;

  while (swapsMade++ < totalSwaps) {
    const indexA = rand(0, length);
    const indexB = rand(0, length);

    arraySwap(genotype.entity, indexA, indexB);
  }

  return genotype;
}