import { deepFreeze } from 'utils';

const config = {
  // Our total number of Facebook friends
  populationSize: 300,
  // Max iterations for the algorithm
  maxGenerations: 5000,
  // Number of people who can fit in the wedding
  guestListSize: 80,
  guestsPerTable: 9,
  // The numbers indicate the relative weights
  // a.k.a. importance of the features
  fitnessFeatures: {
    politics: 0.60,
    sports: 0.10,
    humor: 0.10
  },
  // Percent chance (0-1) that mutation will occur
  mutationChance: 0.05,
  // Percentage of genes swapped during mutation
  mutationPercent: 0.05
};

export default deepFreeze(config);