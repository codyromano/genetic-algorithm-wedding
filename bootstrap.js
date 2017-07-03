import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import seed from 'experiment/seed';
import getFitness from 'experiment/fitness';
import crossover from 'experiment/crossover';
import mutate from 'experiment/mutate';

const mother = seed();

const printGenotype = genotype => genotype.map(
  gen => gen.name.slice(-5)).join(' ');

console.log( printGenotype(mother));
console.log( printGenotype( mutate(mother) ) );


ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);