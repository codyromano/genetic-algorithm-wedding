import GeneticExperiment from 'experiment/GeneticExperiment';
import config from 'experiment/config';

import seed from 'genetic-operators/seed';
import fitness from 'genetic-operators/fitness';
import crossover from 'genetic-operators/crossover';
import mutate from 'genetic-operators/mutate';
import selection from 'genetic-operators/selection';

const getDefaultOptions = () => {
  return {
    seed,
    fitness,
    crossover,
    mutate,
    selection,
    maxGenerations: config.maxGenerations,
    maxGenotypes: config.guestListSize
  };
};

export default function(options = {}) {
  // Allow the caller to override default operators
  const constructArgs = Object.assign(
    getDefaultOptions(),
    options
  );
  return new GeneticExperiment(constructArgs);
};