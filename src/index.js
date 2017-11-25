import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './component/App';

import configureSocket from './configureSocket';
import configureStore from './configureStore';
import { listenAndProcessMessageQueue } from './messageHandler';

import './styles/main.scss';

const socket = configureSocket();
const store = configureStore(socket);
// Process message queue
listenAndProcessMessageQueue(socket, store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
