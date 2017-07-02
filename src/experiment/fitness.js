module.exports = function(seatArrangement) {
  // TODO: Move nested functions outside closure. This
  // is to resolve a transient bug

  const { friendsPerTable } = this.userData;
  let totalFitness = 0;

  // How well do you get along with the
  // person sitting beside you?
  const getPairFitness = (personA, personB) => {
    let fitness = 0;

    if (personA && personB) {
      for (const personA_attr in personA.attrs) {
        // Difference in attributes between two people
        fitness+= personB.attrs[personA_attr] - personA.attrs[personA_attr];
      }
    }
    return fitness;
  };

  // How well does the entire table get along?
  const getTableFitness = people => {
    let fitness = 0;

    for (let i=0; i<people.length; i+= 2) {
      fitness+= getPairFitness(people[i], people[i + 1]);
    }
    return fitness;
  };

  for (let i=0; i<seatArrangement.length; i+= friendsPerTable) {
    const friendsAtTable = seatArrangement.slice(i, friendsPerTable);
    totalFitness+= getTableFitness(friendsAtTable);
  }

  return totalFitness;

  // TODO: Ensure low fitness is good
  // or change criteria
};