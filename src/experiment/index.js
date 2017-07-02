// Genetic.js library by SubProtocol
const genetic = require('genetic-js');

// Implementation of Genetic.js
const seedFn = require('./seed');
const mutateFn = require('./mutate');
const fitnessFn = require('./fitness');

const experiment = genetic.create();

// Treat the greater of two fitness scores as optimal
experiment.optimize = genetic.Optimize.Maximize;

// Select the fittest of two random individuals
experiment.select1 = genetic.Select1.Tournament2;
experiment.select2 = genetic.Select2.FittestRandom;

experiment.seed = seedFn;
experiment.mutate = mutateFn;
experiment.fitness = fitnessFn;

/*
experiment.crossover = (arrangementA, arrangementB) => {
};
*/

experiment.notification = (...args) => {
  //console.log(...args);
};

const config = {
  iterations: 250,
  size: 250
};

const userData = {
  friends: [],
  friendsPerTable: 10
};

module.exports = {
  init() {
    experiment.evolve(config, userData);
  }
};