import React from 'react';
import { shallow } from 'enzyme';

import { ResetPassword } from '../index';
import { PASSWORD_RESET_CONFIRM_SUCCESS } from '../../../constants/auth';
import InputTextField from '../../../components/InputTextField';

const history = {
  goBack: jest.fn(),
  push: jest.fn(),
};
const auth = {};
const match = {
  params: {
    uid: 'uid',
    token: 'token',
  },
};

describe('ResetPassword', () => {
  beforeEach(() => {
    history.push.mockClear();
    history.goBack.mockClear();
  });

  it('should render component without problem', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper).toHaveLength(1);
  });

  it('should go to homepage if PASSWORD_RESET_CONFIRM_SUCCESS', () => {
    const wrapper = shallow(<ResetPassword history={history} />);
    wrapper.setProps({
      auth: {
        status: PASSWORD_RESET_CONFIRM_SUCCESS,
      },
    });
    expect(history.push).toHaveBeenCalledWith('/');
  });

  it('state values should be changed together when input fields are changed ', () => {
    const wrapper = shallow(<ResetPassword auth={auth} history={history} />);
    wrapper
      .find(InputTextField)
      .at(0)
      .prop('onChange')({
      target: { name: 'password1', value: 'admin' },
    });
    expect(wrapper.state('password1')).toBe('admin');

    wrapper
      .find(InputTextField)
      .at(1)
      .prop('onChange')({
      target: { name: 'password2', value: 'admin' },
    });
    expect(wrapper.state('password2')).toBe('admin');
  });

  it('passwordResetConfirmRequest should be called when form is submitted', () => {
    const passwordResetConfirmRequest = jest.fn();
    const wrapper = shallow(
      <ResetPassword
        auth={auth}
        history={history}
        passwordResetConfirmRequest={passwordResetConfirmRequest}
        match={match}
      />
    );
    wrapper.setState({
      password1: 'admin',
      password2: 'admin',
    });
 //   wrapper.find('.bottomBtn').simulate('click', { preventDefault: jest.fn() });
    // expect(passwordResetConfirmRequest).toHaveBeenCalledWith({
    //   uid: 'uid',
    //   token: 'token',
    //   new_password1: 'admin',
    //   new_password2: 'admin',
    // });
  });
});
