import io from 'socket.io-client';

export default () => {
  return io('ws://stocks.mnet.website', {
    'transports': ['websocket', 'polling']
  });
};
