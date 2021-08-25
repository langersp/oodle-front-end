import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './context/StateProvider';
import globalReducer from './context/globalReducer';

import App from './app/App';

const initialState = {
  beerSelected: {},
};

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={globalReducer}>
      <App />
  </StateProvider>,
  document.getElementById('root')
);
