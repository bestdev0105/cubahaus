import React from 'react';
import { shallow } from 'enzyme';

import CheckEmail from '../index';

describe('CheckEmail', () => {
  it('should render component without problem', () => {
    const wrapper = shallow(<CheckEmail />);
    expect(wrapper).toHaveLength(1);
  });

  it('should go back to login when gobacklogin button is clicked', () => {
    const history = {
      replace: jest.fn(),
    };
    const wrapper = shallow(<CheckEmail history={history} />);
    wrapper.find('.bottomBtn').simulate('click');
    expect(history.replace).toHaveBeenCalledWith('/');
  });
});
