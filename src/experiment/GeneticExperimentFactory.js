import GeneticExperiment from 'experiment/GeneticExperiment';
import getMockPopulation from 'experiment/helpers/getMockPopulation';
import config from 'experiment/config';

import seed from 'genetic-operators/seed';
import fitness from 'genetic-operators/fitness';
import crossover from 'genetic-operators/crossover-OX1';
import mutate from 'genetic-operators/mutate';
import selection from 'genetic-operators/selection';
import extinction from 'genetic-operators/extinction';
import survival from 'genetic-operators/survival';

let initialPopulation = null;

export async function onExperimentReady(callback) {
  const mockData = await getMockPopulation(config.populationSize);
  initialPopulation = mockData;

  callback(mockData);
}

const getDefaultOptions = () => {
  const { maxGenerations, guestListSize } = config;

  return {
    seed,
    fitness,
    crossover,
    mutate,
    selection,
    extinction,
    survival,
    initialPopulation,
    maxGenerations,
    maxGenotypes: guestListSize
  };
};

export function createExperiment(options = {}) {
  // Allow the caller to override default operators
  const constructArgs = Object.assign(
    getDefaultOptions(),
    options
  );
  return new GeneticExperiment(constructArgs);
}