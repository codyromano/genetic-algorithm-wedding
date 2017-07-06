import { cloneObjectArray } from 'utils';
import mapPartialGenotypeToChild from './mapPartialGenotypeToChild';
import fitness from 'genetic-operators/fitness';

/**
* @module crossver
* @desc Combine genotypes to produce a pair of offspring.
* This implementation uses OX1 ordered crossover.
*/
export default function(mother, father) {
  // Get just the genotype data; we don't care about
  // metadata such as fitness score
  mother = mother.entity;
  father = father.entity;

  // Small optimization that can make a difference for huge genotypes
  const motherLength = mother.length;
  const fatherLength = father.length;

  if (motherLength !== fatherLength || motherLength < 1) {
    throw new Error(`Genotypes must consist of at least
      2 genes and parents must be of equal length.`);
  }

  const daughterEntity = cloneObjectArray(mother);
  const sonEntity = cloneObjectArray(father);

  // Map a section of the mother's genotype to the son
  mapPartialGenotypeToChild(mother, sonEntity);
  // Repeat the mapping, this time with father to daugther
  mapPartialGenotypeToChild(father, daughterEntity);

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