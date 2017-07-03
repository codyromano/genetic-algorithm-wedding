import React from 'react';
import ReactDOM from 'react-dom';
import getMockPopulation from 'experiment/getMockPopulation';
import seed from 'experiment/seed';
import App from 'components/App';

console.log(seed());

ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);