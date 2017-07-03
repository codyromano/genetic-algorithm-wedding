import getMockIndividual from 'experiment/helpers/getMockIndividual';
import config from 'experiment/config';

export default function() {
  const population = [];

  for (let i=0; i<config.populationSize; i++) {
    population.push( getMockIndividual() );
  }

  return population;
};