import getRandomFitnessFeatures from 'experiment/getRandomFitnessFeatures';
import { rand, getID } from 'utils';

export default function() {
  const id = getID();

  return {
    id,
    name: `Guest ${id}`,
    image: 'placeholder.png',
    features: getRandomFitnessFeatures()
  };
};