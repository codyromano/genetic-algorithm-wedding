import { rand } from 'utils';

const getTail = (index, array) => array.slice(0, index);
const getHead = (index, array) => array.slice(index);

/**
* @module crossver
* @desc Combine genotypes to produce a pair of offspring.
* This implementation uses the "one-point crossover" strategy.
*/
export default function(mother, father) {
  // Get just the genotype data; we don't care about
  // metadata such as fitness score
  mother = mother.entity;
  father = father.entity;

  if (mother.length !== father.length || mother.length < 1) {
    throw new Error(`Genotypes must consist of at least
      2 genes and parents must be of equal length.`);
  }
  // Choose a random point in the parent genotypes
  const crossoverPoint = rand(0, mother.length);

  // Identify the genes (in this case, dinner guests) that
  // come before and after the crossOver point
  const [ fatherTail, motherTail ] = [father, mother].map(
    getTail.bind(null, crossoverPoint)
  );
  const [ fatherHead, motherHead ] = [father, mother].map(
    getHead.bind(null, crossoverPoint)
  );

  // Swap parents' heads and tails, respectively, to get offspring
  const son = fatherTail.concat(motherHead);
  const daughter = motherTail.concat(fatherHead);

  return [son, daughter];
}