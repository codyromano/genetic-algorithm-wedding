import GeneticExperiment from 'experiment/GeneticExperiment';

import seed from 'genetic-operators/seed';
import fitness from 'genetic-operators/fitness';
import crossover from 'genetic-operators/crossover';
import mutate from 'genetic-operators/mutate';

export default function(options = {}) {
  // Core genetic operations needed by the GA
  const operators = { seed, fitness, crossover, mutate };

  // Allow the caller to override default operators
  const constructArgs = Object.assign(operators, options);

  return new GeneticExperiment(constructArgs);
};