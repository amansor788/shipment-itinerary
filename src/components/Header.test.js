import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Header from './Header';

const setup = (props={}, state=null) => {
  return shallow(<Header {...props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  expect(headerComponent.length).toBe(1);
});

