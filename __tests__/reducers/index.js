import reducer from '../../src/reducers';
import * as types from '../../src/constants/ActionTypes';
import { fromJS } from 'immutable';

test('Reducer: FETCH_TICKER_DATA ', () => {
  const mockedDate = new Date(2017, 11, 10);
  global.Date = jest.fn(() => mockedDate);

  const data = [
    ['shld', 115.46455],
    ['yhoo', 45.6689],
    ['evi', 10.958545],
    ['aks', 156],
    ['ebr', 138.1275844301807],
    ['intc', 78.49847],
    ['tck', 67.39483]
  ];
  const action = {
    'type': types.FETCH_TICKER_DATA,
    data
  };

  const initialState = fromJS({
    'tickerData': {}
  });

  const expectedState = fromJS({
    'tickerData': {
      'shld': {
        'name': 'shld',
        'price': '115.46',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'yhoo': {
        'name': 'yhoo',
        'price': '45.67',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'evi': {
        'name': 'evi',
        'price': '10.96',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'aks': {
        'name': 'aks',
        'price': '156.00',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'ebr': {
        'name': 'ebr',
        'price': '138.13',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'intc': {
        'name': 'intc',
        'price': '78.50',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'tck': {
        'name': 'tck',
        'price': '67.39',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      }
    }
  });

  const nextState = reducer(initialState, action);
  expect(nextState).toEqual(expectedState);
});

test('Reducer: FETCH_TICKER_DATA: returns updated ticker data', () => {
  const mockedDate = new Date(2017, 11, 10);
  global.Date = jest.fn(() => mockedDate);

  const data = [
    ['shld', 135.46455],
    ['yhoo', 35.6689],
    ['evi', 100.958545],
    ['aks', 16.398643],
    ['ebr', 138.1275844301807],
    ['intc', 79.49847],
    ['tck', 167.39483]
  ];

  const action = {
    'type': types.FETCH_TICKER_DATA,
    data
  };

  const initialState = fromJS({
    'tickerData': {
      'shld': {
        'name': 'shld',
        'price': '115.46',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'yhoo': {
        'name': 'yhoo',
        'price': '45.67',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'evi': {
        'name': 'evi',
        'price': '10.96',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'aks': {
        'name': 'aks',
        'price': '156.00',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'ebr': {
        'name': 'ebr',
        'price': '138.13',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'intc': {
        'name': 'intc',
        'price': '78.50',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      },
      'tck': {
        'name': 'tck',
        'price': '67.39',
        'color': '#000000',
        'backgroundColor': 'transparent',
        'lastUpdated': new Date()
      }
    }
  });

  const expectedState = fromJS({
    'tickerData': {
      'shld': {
        'name': 'shld',
        'price': '135.46',
        'color': '#ffffff',
        'backgroundColor': '#96bf48',
        'lastUpdated': new Date()
      },
      'yhoo': {
        'name': 'yhoo',
        'price': '35.67',
        'color': '#ffffff',
        'backgroundColor': '#cd201f',
        'lastUpdated': new Date()
      },
      'evi': {
        'name': 'evi',
        'price': '100.96',
        'color': '#ffffff',
        'backgroundColor': '#96bf48',
        'lastUpdated': new Date()
      },
      'aks': {
        'name': 'aks',
        'price': '16.40',
        'color': '#ffffff',
        'backgroundColor': '#96bf48',
        'lastUpdated': new Date()
      },
      'ebr': {
        'name': 'ebr',
        'price': '138.13',
        'color': '#000000',
        'backgroundColor': '#e0d9d9',
        'lastUpdated': new Date()
      },
      'intc': {
        'name': 'intc',
        'price': '79.50',
        'color': '#ffffff',
        'backgroundColor': '#96bf48',
        'lastUpdated': new Date()
      },
      'tck': {
        'name': 'tck',
        'price': '167.39',
        'color': '#ffffff',
        'backgroundColor': '#cd201f',
        'lastUpdated': new Date()
      }
    }
  });

  const nextState = reducer(initialState, action);
  expect(nextState).toEqual(expectedState);
});

test('Reducer: return default state', () => {
  const action = {};
  const initialState = fromJS({
    'tickerData': {}
  });
  const nextState = reducer(initialState, action);
  expect(nextState).toEqual(initialState);
});

test('Reducer: FETCH_TICKER_DATA pass undefined state', () => {
  const action = {
    'type': types.FETCH_TICKER_DATA
  };

  const expectedState = fromJS({
    'tickerData': {}
  });

  const nextState = reducer(undefined, action);
  expect(nextState).toEqual(expectedState);
});