import getRandomFitnessFeatures from 'experiment/impl/getRandomFitnessFeatures';
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