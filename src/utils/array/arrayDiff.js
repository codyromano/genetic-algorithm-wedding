import { convertObjectArrayToHashMap } from 'utils';
/**
* @desc Given two sets, A and B, find that the elements that
* exist in set A but not in set B, and vice versa.
*
* @param {Array<Plain object>}
* @param {Array<Plain object>}
* @param {String} Unique key existing in all objects in both sets
*
* @returns {Array<Excluse to A, Exclusive to B>}
*/
export default function(setA = [], setB = [], key) {
  const exclusiveToA = [];
  const exclusiveToB = [];

  const setAHashTable = convertObjectArrayToHashMap(setA, key);
  const setBHashTable = convertObjectArrayToHashMap(setB, key);

  setA.forEach((item, index) => {
    const keyA = item[key];

    if (!setBHashTable[keyA]) {
      exclusiveToA.push(index);
    }
  });

  setB.forEach((item, index) => {
    const keyB = item[key];

    if (!setAHashTable[keyB]) {
      exclusiveToB.push(index);
    }
  });

  return [exclusiveToA, exclusiveToB];
}