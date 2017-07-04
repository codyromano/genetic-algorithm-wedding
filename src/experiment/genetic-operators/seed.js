import config from 'experiment/config';
import getMockPopulation from 'experiment/helpers/getMockPopulation';
import { randFromArray } from 'utils';

const population = getMockPopulation();

export default function() {
  const { guestListSize } = config;

  // In this case, genotype represents guests invited to wedding,
  // partitioned by table
  const genotype = [];

  let totalGuestsAdded = 0;

  // Use a hashmap for de-duplication (friend.id => friend)
  const guestsAddedMap = {};

  while (totalGuestsAdded < guestListSize) {
    // Shallow clone friend
    const friend = Object.assign({}, randFromArray(population));

    if (!guestsAddedMap[friend.id]) {
      guestsAddedMap[friend.id] = true;
      genotype.push(friend);
      totalGuestsAdded+= 1;
    }
  }

  return genotype;
}