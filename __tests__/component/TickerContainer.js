import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';

import TickerContainer from '../../src/component/TickerContainer';

test('render Header:', () => {
  const tickerData = fromJS({
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
  const component = renderer.create(
      <TickerContainer tickerData={tickerData} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});