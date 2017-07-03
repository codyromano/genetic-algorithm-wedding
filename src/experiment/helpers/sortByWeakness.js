import sortByFitness from 'experiment/helpers/sortByFitness';

// Weakness is the opposite of fitness, so we only need to
// negate the fitness function
function negate(fn) {
  return (...args) => !fn(...args);
}

export default negate(sortByFitness);