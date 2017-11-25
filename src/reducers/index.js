import { fromJS } from 'immutable';
import { normalizerTickerData } from '../utils/normalizer';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  'tickerData': {}
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TINKER_DATA:
      return state.mergeIn(['tickerData'], normalizerTickerData(state.get('tickerData').toJSON(), action.data));

    default:
      return state;
  }
}
