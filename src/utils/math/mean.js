export default function(array) {
  if (!Array.isArray(array) || !array.length) {
    return null;
  }
  const sum = array.reduce((total, n) => total + n, 0);
  return sum / array.length;
};