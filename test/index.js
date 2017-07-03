//import getMockIndividualTest from 'test/getMockIndividualTest';
import fitness from 'genetic-operators/fitness';
import survival from 'genetic-operators/survival';
// TODO: Implement legit Jasmine unit tests

// Must be evenly divisible
const testGenomeSize = 12;

// Generate a genome (a.k.a. seating arrangement) where all the
// guests have identical interests. This should be considered optimal.
function getOptimalFitGenome() {
  const testPerson = {
    name: 'Conservative Sports Fan',
    image: 'placeholder.png',
    features: {
      politics: 1,
      sports: 1,
      humor: 0
    }
  };

  const genome = {
    testGroup: 'optimal',
    entity: new Array(testGenomeSize).fill(testPerson),
    fitness: 0
  };

  genome.fitness = fitness(genome);
  return genome;
}

// Generate a genome (a.k.a. seating arrangement) where the
// guests have different interests. This should be sub-optimal.
function getSubOptimalGenome() {
  const testPersonA = {
    name: 'Conservative Sports Fan',
    image: 'placeholder.png',
    features: {
      politics: 1,
      sports: 1,
      humor: 0
    }
  };

  const testPersonB = {
    name: 'Liberal Person Who Dislikes Sports',
    image: 'placeholder.png',
    features: {
      politics: 0,
      sports: 0,
      humor: 0
    }
  };

  const groupA = new Array(testGenomeSize / 2).fill(testPersonA);
  const groupB = new Array(testGenomeSize / 2).fill(testPersonB);
  
  const genome = {
    testGroup: 'subOptimal',
    entity: groupA.concat(groupB),
    fitness: 0
  };

  genome.fitness = fitness(genome);
  return genome;
}

const testOptimal = getOptimalFitGenome();
const testSubOptimal = getSubOptimalGenome();

console.assert(
  fitness(testOptimal) === 0,
  'Optimal fit genome has fitness score of 0'
);

console.assert(
  fitness(testOptimal) < fitness(testSubOptimal),
  'Fitness score for optimal genome is lower than that of sub-optimal'
);

const survivor = survival(testOptimal, testSubOptimal);
console.assert(
  survivor.testGroup === 'optimal',
  'Optimal test group outlives suboptimal'
);
