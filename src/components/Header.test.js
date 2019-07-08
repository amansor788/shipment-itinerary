import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const setup = (props={}, state=null) => {
  return shallow(<Header {...props} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  expect(headerComponent.length).toBe(1);
});

