import { deepFreeze } from 'utils';

const config = {
  populationSize: 500,
  guestListSize: 80,
  guestsPerTable: 10,

  // The numbers indicate the relative weights
  // a.k.a. importance of the features
  fitnessFeatures: {
    politics: 0.50,
    sports: 0.25,
    humor: 0.25
  }
};

export default deepFreeze(config);