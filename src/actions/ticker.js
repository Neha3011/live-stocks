import * as types from '../constants/ActionTypes';

const Actions = {
  fetchTickerData(data) {
    return {
      'type': types.FETCH_TINKER_DATA,
      data
    };
  },
};

export default Actions;
