import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/index';
import Routes from './src/Screens/Routes';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
