import * as types from './constants/ActionTypes';

export const listenAndProcessTickerQueue = (socket, store) => {
  socket.on('connect', () => {
    // TODO Show Connect Status at the top of the page
    console.log('connect');
  });

  socket.on('connect_error', (err) => {
    console.log('connect_error', err);
  });

  socket.on('messages', (data) => {
    store.dispatch({
      'type': types.FETCH_TICKER_DATA,
      data
    });
  });
};
