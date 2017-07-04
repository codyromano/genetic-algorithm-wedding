import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import BasePage from 'pages/BasePage';
import 'test';

ReactDOM.render((
  <HashRouter>
    <BasePage/>
  </HashRouter>
), document.getElementById('react-root'));