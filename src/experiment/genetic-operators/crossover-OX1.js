import {
  rand,
  UniqueArray,
  cloneObjectArray
} from 'utils';

import fitness from 'genetic-operators/fitness';

/**
* @desc Map part of a parent's genotype onto a child, taking care
* not to create duplicates. If inserting a parent gene would result
* in a duplicate, we do nothing.
*/
const mapPartialGenotypeToChild = (
  parentEntity,
  childEntity,
  parentStartIndex,
  parentEndIndex
) => {

  const sameLength = childEntity.length === parentEntity.length;
  const bothArrays = [childEntity, parentEntity].every(Array.isArray);
  const validRange = parentEndIndex >= parentStartIndex;

  if (!sameLength || !bothArrays) {
    throw new TypeError(`Cannot map genotype. Child and parent entities
      must be arrays of equal length.`);
  }
  if (!validRange) {
    throw new RangeError(`Cannot map genotype. Invalid
      range for parent entity.`);
  }

  const childResult = new UniqueArray(childEntity);

  for (let i=parentStartIndex; i<parentEndIndex; i++) {
    const parentItem = parentEntity[i];
    if (childResult.insert(parentItem, i)) {
      console.log('Mapped parent gene to child');
    }
  }
  
  return childResult;
};

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

  const motherStartIndex = rand(0, motherLength);
  const motherEndIndex = Math.max(motherStartIndex, rand(0, motherLength));

  // Map a section of the mother's genotype to the son
  mapPartialGenotypeToChild(
    mother,
    sonEntity,
    motherStartIndex,
    motherEndIndex
  );

  const fatherStartIndex = rand(0, fatherLength);
  const fatherEndIndex = Math.max(fatherStartIndex, rand(0, fatherLength));

  // Repeat the mapping, this time with father to daugther
  mapPartialGenotypeToChild(
    father,
    daughterEntity,
    fatherStartIndex,
    fatherEndIndex
  );

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