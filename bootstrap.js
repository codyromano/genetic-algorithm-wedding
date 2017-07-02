import React from 'react';
import ReactDOM from 'react-dom';
import getMockPopulation from 'experiment/getMockPopulation';

console.log(
  getMockPopulation()
);

//import App from 'components/App';
//import {Facebook, FacebookApiException} from 'fb';
//console.log(Facebook);

ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);