import GeneticExperiment from 'experiment/GeneticExperiment';

import seed from 'experiment/genetic-operators/seed';
import fitness from 'experiment/genetic-operators/fitness';
import crossover from 'experiment/genetic-operators/crossover';
import mutate from 'experiment/genetic-operators/mutate';

export default function(options = {}) {
  // Core genetic operations needed by the GA
  const operators = { seed, fitness, crossover, mutate };

  // Allow the caller to override default operators
  const constructArgs = Object.assign(operators, options);

  return new GeneticExperiment(constructArgs);
};