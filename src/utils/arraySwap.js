export default function(array, indexA, indexB) {
  const itemA = array[indexA];
  const itemB = array[indexB];

  array[indexA] = itemB;
  array[indexB] = itemA;

  return array;
};