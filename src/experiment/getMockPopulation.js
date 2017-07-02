import getMockIndividual from 'experiment/getMockIndividual';

export default function() {
  const population = [];

  // Assume we have 600 Facebook friends
  for (let i=0; i<600; i++) {
    population.push( getMockIndividual() );
  }

  return population;
};