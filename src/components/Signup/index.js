import React, { Component } from "react";
import { connect } from "react-redux";
import { IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { Dialog, DialogContent } from "@material-ui/core";

import InputTextField from "../InputTextField";
import ErrorMessage from "../ErrorMessage";
import NButton from "../ButtonContainer";

import { registerRequest } from "../../actions/auth";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../../constants/auth";

import signUpImg from "../../assets/landing/12.svg";
import facebookIcon from "../../assets/SVG/facebook-logo.svg";
import googleIcon from "../../assets/SVG/google-plus-symbol.svg";
import emailIcon from "../../assets/SVG/email.svg";
import signupImg1 from "../../assets/landing/16.svg";
import signupImg2 from "../../assets/landing/17.svg";
import "./styles.scss";

const UserIcon = styled.img`
  width: 27px;
  height: 27;
  filter: invert(1);
`;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password1: "",
      password2: "",
      open: true,
      flag: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    const { status, error } = auth;

    if (status === REGISTER_FAIL) {
      this.setState({
        usernameError: error.username ? error.username.join() : "",
        emailError: error.email ? error.email.join() : ""
      });
      this.props.onClose();
    } else if (status === REGISTER_SUCCESS) {
      // if (loggedInUser) {
      //   this.props.history.push("/checkEmail");
      // }
      this.props.onClose();
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
      usernameError: false,
      emailError: false,
      password1Error: false,
      password2Error: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { registerRequest } = this.props;
    const { firstname, lastname, email, password1, password2 } = this.state;
    if (username === "" || lastname === "") {
      this.setState({ usernameError: true });
    } else if (email === "") {
      this.setState({ emailError: true });
    } else if (password1 === "" || password1.length < 8) {
      this.setState({ password1Error: true });
    } else if (password2 !== password1) {
      this.setState({ password2Error: true });
    } else {
      var username = firstname + lastname;
      registerRequest({ username, email, password1, password2 });
    }
  };

  signupBack = () => {
    this.setState({
      flag: true
    });
  };

  signupOpen = () => {
    this.setState({
      flag: false
    });
  };

  render() {
    const { open, onClose } = this.props;
    const {
      firstname,
      lastname,
      email,
      password1,
      password2,
      usernameError,
      emailError,
      password1Error,
      password2Error,
      flag
    } = this.state;

    const valid =
      firstname &&
      lastname &&
      email &&
      (password1 && password2 && password1 === password2);

    return (
      <Dialog open={open} onClose={this.props.onClose} maxWidth="lg">
        {flag ? (
          <DialogContent className="signUp">
            <IconButton className="signUp__close" onClick={this.props.onClose}>
              <CloseIcon />
            </IconButton>
            <div className="signUp__buttons">
              <p className="signUp__buttons__title">Sign up</p>
              <Button
                className="signUp__buttons__button"
                style={{ backgroundColor: "#ff4747" }}
              >
                <UserIcon src={googleIcon} alt="" />
                <p className="signUp__buttons__button__text">Google</p>
              </Button>
              <Button
                className="signUp__buttons__button"
                style={{ backgroundColor: "#252fff" }}
              >
                <UserIcon src={facebookIcon} alt="" />
                <p className="signUp__buttons__button__text">Facebook</p>
              </Button>
              <Button
                onClick={this.signupOpen}
                className="signUp__buttons__button"
                style={{ backgroundColor: "#4c9cff" }}
              >
                <UserIcon src={emailIcon} alt="" />
                <p className="signUp__buttons__button__text">Email</p>
              </Button>
            </div>
            <div className="signUp__form">
              <img
                alt=""
                src={signupImg1}
                className="signUp__form__background"
              />
            </div>
          </DialogContent>
        ) : (
          <DialogContent className="email">
            <div className="email__content">
              <p className="email__content__title">Sign up with email</p>
              <InputTextField
                name="firstname"
                label="First name:"
                type="text"
                onChange={this.handleInputChange}
                state={firstname}
                margin="normal"
                className="email__content__registerInput"
              />
              <ErrorMessage msg={usernameError} />

              <InputTextField
                name="lastname"
                label="Last name:"
                type="text"
                onChange={this.handleInputChange}
                state={lastname}
                margin="normal"
                className="email__content__registerInput"
              />
              <ErrorMessage msg={usernameError} />

              {/* Email field */}
              <InputTextField
                name="email"
                label="E-mail:"
                type="email"
                onChange={this.handleInputChange}
                state={email}
                margin="normal"
                className="email__content__registerInput"
              />
              <ErrorMessage msg={emailError} />

              {/* "Enter password" field */}
              <InputTextField
                name="password1"
                label="Password:"
                type="password"
                onChange={this.handleInputChange}
                state={password1}
                margin="normal"
                className="email__content__registerInput"
              />
              <ErrorMessage msg={password1Error} />

              {/* "Confirm password" field */}
              <InputTextField
                name="password2"
                label="Confirm password:"
                type="password"
                onChange={this.handleInputChange}
                state={password2}
                margin="normal"
                className="email__content__registerInput"
              />
              <ErrorMessage msg={password2Error} />
              <div className="email__content__container">
                <IconButton
                  className="email__content__container__LineButton"
                  onClick={this.signupBack}
                >
                  Back
                </IconButton>
                <IconButton
                  style={{ padding: "0px", borderRadius: "25px" }}
                  onClick={e => (valid ? this.handleSubmit(e) : null)}
                  //       className={`bottomBtn ${
                  //         valid ? "valid-button" : "invalid-button"
                  //       }`}
                >
                  <NButton type="gradient" size="small">
                    Sign up
                  </NButton>
                </IconButton>
              </div>
            </div>
            <img alt="" src={signupImg2} className="email__background" />
          </DialogContent>
        )}
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  registerRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
