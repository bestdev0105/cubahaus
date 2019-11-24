import React from "react";
import { shallow, mount } from "enzyme";
import { IconButton } from "@material-ui/core";

import { Register } from "../index";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../../../constants/auth";
import InputTextField from "../../../components/InputTextField";

const auth = {};
const history = {
  goBack: jest.fn(),
  push: jest.fn()
};

describe("Register", () => {
  beforeEach(() => {
    history.push.mockClear();
    history.goBack.mockClear();
  });

  it("should render component without problem", () => {
    const wrapper = shallow(<Register auth={auth} />);
    expect(wrapper).toHaveLength(1);
  });

  it("should set error if register fails ", () => {
    const wrapper = shallow(<Register auth={auth} history={history} />);

    wrapper.setProps({
      auth: {
        status: REGISTER_FAIL,
        error: {
          username: ["Username exists"],
          email: ["Email is invalid"]
        }
      }
    });
    expect(wrapper.state("usernameError")).toBe("Username exists");
    expect(wrapper.state("emailError")).toBe("Email is invalid");
  });

  it("state values should be changed together when input fields are changed ", () => {
    const wrapper = shallow(<Register auth={auth} history={history} />);
    wrapper.setState({ flag: false });
    wrapper
      .find(InputTextField)
      .at(0)
      .prop("onChange")({
      target: { name: "email", value: "admin@example.com" }
    });
    expect(wrapper.state("email")).toBe("admin@example.com");

    wrapper
      .find(InputTextField)
      .at(1)
      .prop("onChange")({
      target: { name: "password1", value: "admin" }
    });
    expect(wrapper.state("password1")).toBe("admin");

    wrapper
      .find(InputTextField)
      .at(2)
      .prop("onChange")({
      target: { name: "password2", value: "admin" }
    });
    expect(wrapper.state("password2")).toBe("admin");
  });

  it("valid state when form is submitted", () => {
    const wrapper = shallow(<Register auth={auth} history={history} />);

    wrapper.setState({
      email: ""
    });
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
    expect(wrapper.state("emailError")).toBe(true);

    wrapper.setState({
      email: "admin@test.com",
      password1: "admin"
    });
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
    expect(wrapper.state("password1Error")).toBe(true);

    wrapper.setState({
      email: "admin@test.com",
      password1: "admin123",
      password2: "admin"
    });
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
    expect(wrapper.state("password2Error")).toBe(true);
  });

  it("submit submit when form is valid", () => {
    const registerRequest = jest.fn();
    const wrapper = shallow(
      <Register
        auth={auth}
        history={history}
        registerRequest={registerRequest}
      />
    );
    wrapper.setState({
      flag: false,
      email: "admin@test.com",
      password1: "admin123",
      password2: "admin123"
    });
    wrapper
      .find(".email")
      .find(IconButton)
      .at(1)
      .simulate("click", { preventDefault: jest.fn() });
    expect(registerRequest).toHaveBeenCalledTimes(1);
  });
});
