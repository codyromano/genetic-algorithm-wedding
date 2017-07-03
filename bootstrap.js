import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import seed from 'experiment/seed';
import getFitness from 'experiment/fitness';

const genotype = seed();
const fitness = getFitness(genotype);

ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);