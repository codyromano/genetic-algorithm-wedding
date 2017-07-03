import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import seed from 'experiment/seed';
import getFitness from 'experiment/fitness';
import crossover from 'experiment/crossover';

const mother = seed();
const father = seed();

console.log('mother: ', mother);
console.log('father: ', father);

const [son, daughter] = crossover(mother, father);

console.log('son: ', son);
console.log('daughter: ', daughter);


ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);