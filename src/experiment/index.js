import genetic from 'genetic-js';
// TODO: Use webpack alias instead of relative path
import configure from './configure';

export const create = (onUpdate) => {
  const experiment = genetic.create();
  configure(experiment);

  experiment.notification = onUpdate;
  return experiment;
};

export const start = (experiment) => {
  const config = {
    iterations: 250,
    size: 250
  };

  const userData = {
    friends: [],
    friendsPerTable: 10
  };

  return experiment.evolve(config, userData);
};