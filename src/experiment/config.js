import { deepFreeze } from 'utils';

const config = {
  // Our total number of Facebook friends
  populationSize: 500,
  // Max iterations for the algorithm
  maxGenerations: 10000,
  // Number of people who can fit in the wedding
  guestListSize: 80,
  guestsPerTable: 10,
  // The numbers indicate the relative weights
  // a.k.a. importance of the features
  fitnessFeatures: {
    politics: 0.50,
    sports: 0.25,
    humor: 0.25
  },
  // Percent chance (0-1) that mutation will occur
  mutationChance: 0.05,
  // Percentage of genes swapped during mutation
  mutationPercent: 0.50
};

export default deepFreeze(config);