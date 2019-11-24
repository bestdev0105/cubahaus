import React from 'react';
import { shallow, mount } from 'enzyme';

import { UserInfoRow } from '../userInfoRow';
const initProps = {
  data: 'admin',
  getUserDetails: jest.fn(),
  apiLabel: 'api',
};
describe('UserInfoRow', () => {
  it('should render component without problem', () => {
    const wrapper = shallow(<UserInfoRow />);
    expect(wrapper).toHaveLength(1);
  });

  it('should show user info with edit button', () => {
    const wrapper = shallow(<UserInfoRow {...initProps} />);
    expect(wrapper.find('.userInfoRow-data').text()).toBe('admin');
    expect(wrapper.find('.fa-edit')).toHaveLength(1);
  });

  it('should show edit form when edit button is clicked', () => {
    const wrapper = shallow(<UserInfoRow {...initProps} />);
    wrapper.find('.userInfoRow-btn').simulate('click');
    expect(wrapper.state('editData')).toBe(true);
    wrapper.update();
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('simulate submit', done => {
    const wrapper = shallow(<UserInfoRow {...initProps} />);

    wrapper.setState({
      editData: true,
    });
    wrapper.update();

    wrapper.find('input').simulate('change', { target: { value: 'newadmin' } });
    expect(wrapper.state('inputData')).toBe('newadmin');

    fetch.mockResponseOnce('[]');
    wrapper.find('.userInfoRow-btn').simulate('click');
    setTimeout(() => {
      expect(wrapper.state('editData')).toBe(false);
      expect(initProps.getUserDetails).toHaveBeenCalled();
      done();
    }, 10);
  });

  // it('should set data state from nextprops', () => {
  //   const wrapper = shallow(<UserInfoRow />);
  //   wrapper.setProps({
  //     data: {
  //       username: 'username',
  //       first_name: 'first_name',
  //     },
  //   });
  //   expect(wrapper.state('username')).toBe('username');
  //   expect(wrapper.state('first_name')).toBe('first_name');
  // });

  // it('handleSumit should be called when form is submitted', () => {
  //   const handleSubmit = jest.fn();
  //   const wrapper = shallow(<UserInfoRow handleSubmit={handleSubmit} />);
  //   wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  //   expect(handleSubmit).toBeCalled();
  // });

  // it('check handleFormInput', () => {
  //   const handleSubmit = jest.fn();
  //   const wrapper = shallow(<UserInfoRow handleSubmit={handleSubmit} />);
  //   wrapper
  //     .find('input')
  //     .at(0)
  //     .simulate('change', { target: { name: 'first_name', value: 'Yong' } });
  //   expect(wrapper.state('first_name')).toBe('Yong');
  // });
});
