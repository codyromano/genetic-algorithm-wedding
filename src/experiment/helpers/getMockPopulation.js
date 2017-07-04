import getRandomFitnessFeatures from 'experiment/helpers/getRandomFitnessFeatures';
import { getID } from 'utils';
import { getFriends } from 'stores/friendStore';

// getFriends() returns an object with name and image. To make
// this a genotype, we need to add a unique id and personality features.
const assignMetadata = friend => {
  return Object.assign(friend, {
    id: getID(),
    features: getRandomFitnessFeatures()
  });
};


export default function(size) {
  return getFriends(size)
    .then(friends => friends.map(assignMetadata));
}
