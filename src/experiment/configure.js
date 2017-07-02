// Genetic.js library by SubProtocol
const genetic = require('genetic-js');

// Implementation of Genetic.js
const seedFn = require('./seed');
const mutateFn = require('./mutate');
const fitnessFn = require('./fitness');

export default function(experiment) {
  /*
  experiment.crossover = (arrangementA, arrangementB) => {
  };
  */
  // Treat the greater of two fitness scores as optimal
  experiment.optimize = genetic.Optimize.Maximize;

  // Select the fittest of two random individuals
  experiment.select1 = genetic.Select1.Tournament2;
  experiment.select2 = genetic.Select2.FittestRandom;

  experiment.seed = seedFn;
  experiment.mutate = mutateFn;
  experiment.fitness = fitnessFn;

  return experiment;
};