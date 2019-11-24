import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import InputTextField from "../../../components/InputTextField";
import { loginRequest } from "../../../actions/auth";

import LoginContainer from "../index";
import ButtonContainer from "../../../components/ButtonContainer";
import { IconButton } from "@material-ui/core";

const history = {
  push: jest.fn()
};
const mockStore = configureMockStore();

let store;

describe("LoginContainer", () => {
  beforeAll(() => {
    store = mockStore({
      auth: {
        error: null
      }
    });
  });

  it("should render my component", () => {
    const wrapper = shallow(<LoginContainer store={store} />);
    expect(wrapper).toHaveLength(1);
  });

  it("change username & passsword", () => {
    const wrapper = shallow(
      <LoginContainer store={store} history={history} />
    ).dive();
    wrapper
      .find(InputTextField)
      .at(0)
      .prop("onChange")({
      target: { name: "username", value: "admin" }
    });
    expect(wrapper.state("username")).toBe("admin");

    wrapper
      .find(InputTextField)
      .at(0)
      .prop("onChange")({
      target: { name: "password", value: "pass" }
    });
    expect(wrapper.state("password")).toBe("pass");
  });
  it("should call handlelogin when form is submitted", () => {
    const wrapper = shallow(
      <LoginContainer store={store} history={history} />
    ).dive();
    wrapper.setState({
      username: "admin",
      password: "pass"
    });
    wrapper.find(IconButton).simulate("click", {
      preventDefault: jest.fn()
    });
    expect(store.getActions()[0]).toEqual(
      loginRequest({ username: "admin", email: "", password: "pass" })
    );
  });
});
