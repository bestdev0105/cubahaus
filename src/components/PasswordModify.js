import React from "react";
import InputTextField from "../components/InputTextField";
import Button from "../components/ButtonContainer";

import "./styles/userPasswordModify.scss";

export default class PasswordModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordNew: "",
      passwordConfirmation: ""
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  changePassword = e => {
    e.preventDefault();

    const { passwordNew, passwordConfirmation } = this.state;
    const passwordObj = {
      ...this.props.data,
      new_password1: passwordNew,
      new_password2: passwordConfirmation
    };

    this.props.handleSubmit(passwordObj);
  };

  render() {
    const { passwordNew, passwordConfirmation } = this.state;

    return (
      <form>
        <h2>{this.props.title}</h2>

        {/* "Enter new password" field */}
        <InputTextField
          name="passwordNew"
          type="password"
          onChange={this.handleInputChange}
          state={passwordNew}
          margin="normal"
          className="resetPasswordInput"
        />

        {/* "Confirm new password" field */}
        <InputTextField
          name="passwordConfirmation"
          type="password"
          onChange={this.handleInputChange}
          state={passwordConfirmation}
          margin="normal"
          className="resetPasswordInput"
        />

        <div className="profile__button__container">
          <Button type="gradient" size="small" onClick={this.changePassword}>
            Update
          </Button>
        </div>
      </form>
    );
  }
}
