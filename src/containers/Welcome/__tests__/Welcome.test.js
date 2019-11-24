import React from 'react';
import { shallow } from 'enzyme';

import Welcome from '../index';

describe('Welcome', () => {
  it('should render component without problem', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toHaveLength(1);
  });
});
