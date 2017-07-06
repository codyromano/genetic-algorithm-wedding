import { UniqueArray, rand } from 'utils';

/**
* @desc Map part of a parent's genotype onto a child, taking care
* not to create duplicates. If inserting a parent gene would result
* in a duplicate, we do nothing.
*/
const mapPartialGenotypeToChild = (
  parentEntity,
  childEntity
) => {

  const sameLength = childEntity.length === parentEntity.length;
  const bothArrays = [childEntity, parentEntity].every(Array.isArray);

  if (!sameLength || !bothArrays) {
    throw new TypeError(`Cannot map genotype. Child and parent entities
      must be arrays of equal length.`);
  }

  const childResult = new UniqueArray(childEntity);
  const parentStartIndex = rand(0, parentEntity.length);
  const parentEndIndex = Math.max(
    parentStartIndex,
    rand(0, parentEntity.length)
  );

  for (let i=parentStartIndex; i<parentEndIndex; i++) {
    const parentItem = parentEntity[i];
    childResult.insert(parentItem, i);
  }
  
  return childResult;
};

export default mapPartialGenotypeToChild;
