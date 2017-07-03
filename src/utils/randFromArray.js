import rand from 'utils/rand';

export default function(array) {
  // rand() floors the result, so we actually
  // want array.length instead of the typical array.length - 1
  const index = rand(0, array.length);
  return array[index];
};