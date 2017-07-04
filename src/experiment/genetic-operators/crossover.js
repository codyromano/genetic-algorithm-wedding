import { rand } from 'utils';
import fitness from 'genetic-operators/fitness';

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

  // TODO: A new class, Genotype, should be created to handle
  // the cration of the {entity, fitness} shape below.

  // Swap parents' heads and tails, respectively, to get offspring
  const sonEntity = fatherTail.concat(motherHead);
  const daughterEntity = motherTail.concat(fatherHead);

  const son = {
    entity: sonEntity,
    fitness: 0
  };
  son.fitness = fitness(son);

  const daughter = {
    entity: daughterEntity,
    fitness: 0
  };
  daughter.fitness = fitness(daughter);

  return [son, daughter];
}