import config from 'experiment/config';
import { rand } from 'utils';

// In this example, the features are politics, sports, etc.
const { fitnessFeatures } = config;
const featureNames = Object.keys(fitnessFeatures);

const getRandomFitnessFeatures = function() {
  return featureNames.reduce((result, name) => {
    result[name] = rand(0, 1, false);
    return result;
  }, {});
};

export default getRandomFitnessFeatures;