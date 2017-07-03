import getMean from 'utils/math/mean';

export default function(array) {
  const mean = getMean(array);
  const calcPower = array.map(num => Math.pow(num - mean, 2));
  
  return getMean(calcPower);
};