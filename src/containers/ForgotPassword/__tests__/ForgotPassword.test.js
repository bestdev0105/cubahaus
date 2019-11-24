import React from "react";
import { shallow } from "enzyme";

import { ForgotPassword } from "../index";
import InputTextField from "../../../components/InputTextField";
import { PASSWORD_RESET_SUCCESS } from "../../../constants/auth";
import ButtonContainer from "../../../components/ButtonContainer";
import { IconButton } from "@material-ui/core";

describe("ForgotPassword", () => {
  it("should render component without problem", () => {
    const wrapper = shallow(<ForgotPassword />);
    expect(wrapper).toHaveLength(1);
  });

  it("redirect to checkEmail if auth status is  PASSWORD_RESET_SUCCESS", () => {
    const history = {
      push: jest.fn()
    };
    const wrapper = shallow(<ForgotPassword history={history} />);
    wrapper.setProps({ auth: { status: PASSWORD_RESET_SUCCESS } });
    expect(history.push).toHaveBeenCalledWith("/checkEmail");
  });

  it("should call passwordResetRequest when form is submitted", () => {
    const passwordResetRequest = jest.fn();
    const wrapper = shallow(
      <ForgotPassword passwordResetRequest={passwordResetRequest} />
    );

    wrapper
      .find(InputTextField)
      .at(0)
      .prop("onChange")({
      target: { value: "admin@test.com" }
    });
    expect(wrapper.state("email")).toBe("admin@test.com");

    wrapper.find(IconButton).simulate("click", {
      preventDefault: jest.fn()
    });
    expect(passwordResetRequest).toHaveBeenCalledWith({
      email: "admin@test.com"
    });
  });
});
