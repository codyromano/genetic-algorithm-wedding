import config from 'experiment/config';
import getMockPopulation from 'experiment/helpers/getMockPopulation';
import { randFromArray } from 'utils';

export default function() {
  // Get a fresh copy of the initial population each time
  // so we don't have to deep-clone an existing population instance
  const population = getMockPopulation();
  const { guestListSize } = config;

  // In this case, genotype represents guests invited to wedding,
  // partitioned by table
  const genotype = [];

  let totalGuestsAdded = 0;

  // Use a hashmap for de-duplication (friend.id => friend)
  const guestsAddedMap = {};

  while (totalGuestsAdded < guestListSize) {
    const friend = randFromArray(population);

    if (!guestsAddedMap[friend.id]) {
      guestsAddedMap[friend.id] = true;
      genotype.push(friend);
      totalGuestsAdded+= 1;
    }
  }

  return genotype;
}