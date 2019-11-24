import React from 'react';
import { shallow } from 'enzyme';

import LogoutSuccess from '../index';

describe('LogoutSuccess', () => {
  it('should render component without problem', () => {
    const wrapper = shallow(<LogoutSuccess />);
    expect(wrapper).toHaveLength(1);
  });

  it("hould go back to dashboard when 'Back to Login' is clicked", () => {
    const history = {
      replace: jest.fn(),
    };
    const wrapper = shallow(<LogoutSuccess history={history} />);
    wrapper.find('.bottomBtn').simulate('click');
    expect(history.replace).toHaveBeenCalledWith('/');
  });
});
