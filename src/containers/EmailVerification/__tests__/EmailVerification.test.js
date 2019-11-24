import React from 'react';
import { shallow, mount } from 'enzyme';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { EmailVerification } from '../index';

const history = createBrowserHistory();
const match = {
  params: {
    token: 'xxxxxxx',
  },
};

describe('EmailVerification', () => {
  it('should render component without problem', () => {
    const wrapper = shallow(<EmailVerification match={match} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('h1').text()).toBe('Verifying email...');
  });

  it('should display email is verified when email is verified', done => {
    fetch.mockResponseOnce(JSON.stringify({ success: true }));
    const wrapper = mount(
      <Router history={history}>
        <EmailVerification match={match} />
      </Router>
    );
    setTimeout(() => {
      expect(
        wrapper.find(EmailVerification).instance().state.emailVerified
      ).toBe(true);
      wrapper.update();
      expect(wrapper.find('h1').text()).toBe('Your email has been verified!');
      done();
    }, 100);
  });

  it('should alert if email is not verified', done => {
    const temp = global.alert;
    global.alert = jest.fn();
    fetch.mockResponseOnce(JSON.stringify({ success: false }), { status: 500 });

    const wrapper = mount(
      <Router history={history}>
        <EmailVerification match={match} />
      </Router>
    );
    setTimeout(() => {
      expect(global.alert).toHaveBeenCalledWith("Couldn't verify email");
      global.alert = temp;
      done();
    }, 100);
  });
});
