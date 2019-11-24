import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Dialog, DialogContent, IconButton, Button } from "@material-ui/core";

import NButton from "../ButtonContainer";
import InputTextField from "../InputTextField";
import ErrorMessage from "../ErrorMessage";

import { loginRequest } from "../../actions/auth";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../constants/auth";

import signinImg from "../../assets/landing/12.svg";
import signinImg1 from "../../assets/landing/18.svg";
import facebookIcon from "../../assets/SVG/facebook-logo.svg";
import googleIcon from "../../assets/SVG/google-plus-symbol.svg";
import "./styles.scss";

const UserIcon = styled.img`
  width: 27px;
  height: 27;
  filter: invert(1);
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: "",
      open: false
    };
  }

  componentDidMount() {
    this.setState({
      username: "",
      passowrd: ""
    });
  }
  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    const { status, error } = auth;

    if (error) {
      this.setState({
        errorMsg: auth.error
      });

      if (status === LOGIN_FAIL) {
        this.setState({
          usernameError: error.username ? error.username.join() : "",
          emailError: error.email ? error.email.join() : ""
        });
      }
    }
    if (status === LOGIN_SUCCESS) {
      this.onClose();
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
      passwordError: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const email = "";
    // if (username === "") {
    // 	this.setState({ usernameError: true })
    // } else if (password === "") {
    // 	this.setState({ passwordError: true })
    // }

    this.props.loginRequest({ username, email, password });
  };

  onClose = () => {
    this.setState({
      username: "",
      passowrd: ""
    });
    this.props.onClose();
  };

  render() {
    const { open, onClose, history } = this.props;
    const {
      username,
      usernameError,
      password,
      passwordError,
      errorMsg
    } = this.state;
    const valid = username && password;

    {
      /* <Dialog open={open} onClose={this.onClose} maxWidth="lg">
      <DialogContent className="loginDialog"> 
      <IconButton className="signIn__close" onClick={this.props.onClose}>
        <CloseIcon />
      </IconButton>*/
    }
    return (
      <div>
        <div className="signIn">
          <div className="signIn__buttons">
            <p className="signIn__buttons__title">Sign in</p>
            <Button
              className="signIn__buttons__button"
              style={{ backgroundColor: "#ff4747" }}
            >
              <UserIcon src={googleIcon} alt="" />

              <p className="signIn__buttons__button__text">Google</p>
            </Button>

            <Button
              className="signIn__buttons__button"
              style={{ backgroundColor: "#252fff" }}
            >
              <UserIcon src={facebookIcon} alt="" />

              <p className="signIn__buttons__button__text">Facebook</p>
            </Button>
          </div>
          <div className="signIn__form">
            <p className="signIn__buttons__title">Or Sign in via Email</p>
            <div className="signIn__form__submit">
              <InputTextField
                name="username"
                label="Username"
                type="text"
                onChange={this.handleInputChange}
                state={username}
                margin="normal"
                className="signIn__form__loginInput"
              />
              <InputTextField
                name="password"
                label="Password"
                type="password"
                onChange={this.handleInputChange}
                state={password}
                margin="normal"
              />
            </div>
            <ErrorMessage msg={errorMsg} />
            <div className="signIn__container">
              <IconButton
                style={{ padding: "0px", borderRadius: "25px" }}
                onClick={e => (valid ? this.handleSubmit(e) : null)}
              >
                <NButton type="gradient" size="small">
                  Sign in
                </NButton>
              </IconButton>
            </div>
          </div>
        </div>
        <img alt="" src={signinImg} className="signIn__background" />
        <img alt="" src={signinImg1} className="signIn__background1" />
        {/* </DialogContent>
      </Dialog> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  loginRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
