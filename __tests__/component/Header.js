import React from 'react';
import Header from '../../src/component/Header';
import renderer from 'react-test-renderer';

test('render Header:', () => {
  const component = renderer.create(
      <Header />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});