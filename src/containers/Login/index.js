import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Grid, IconButton, Button } from "@material-ui/core";

import { loginRequest } from "../../actions/auth";
import InputTextField from "../../components/InputTextField";
import Img from "../../components/NextButton";
import ErrorMessage from "../../components/ErrorMessage";
import next_enable from "../../assets/arrow_blue.svg";
import next_disable from "../../assets/arrow_lightblue.svg";
import bg_door from "../../assets/bg_door.svg";
// import Button from "../../components/ButtonContainer";
import TitleText from "../../components/TitleText";
import signinImg from "../../assets/landing/12.svg";
import signinImg1 from "../../assets/landing/18.svg";
import facebookIcon from "../../assets/SVG/facebook-logo.svg";
import googleIcon from "../../assets/SVG/google-plus-symbol.svg";
import NButton from "../../components/ButtonContainer";

import "./login.scss";

const UserIcon = styled.img`
  width: 27px;
  height: 27;
  filter: invert(1);
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    if (auth.error) {
      this.setState({
        errorMsg: auth.error
      });
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

  render() {
    const { history } = this.props;
    const {
      username,
      usernameError,
      password,
      passwordError,
      errorMsg
    } = this.state;
    const valid = username && password;

    return (
      <div className="auth ">
        <div className="signinForm">
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
              <div className="invalidMsg">
                <ErrorMessage msg={errorMsg} />
                <div
                  onClick={() => history.push("/forgot")}
                  className="forgotPasswordBtn"
                >
                  <span style={{ textDecoration: "underline" }}>
                    Forgot Password?
                  </span>
                </div>
              </div>
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
        </div>
        {/* <Grid container justify="center">
          <Grid item xs={12} md={6} lg={6}>
            <form>
              <InputTextField
                name="username"
                label="Username"
                type="text"
                onChange={this.handleInputChange}
                state={username}
                margin="normal"
                className="loginInput"
              />
              <InputTextField
                name="password"
                label="Password"
                type="password"
                onChange={this.handleInputChange}
                state={password}
                margin="normal"
              />
            </form>
          </Grid>
        </Grid>
        <ErrorMessage msg={errorMsg} />
        <div className="auth__button__container">
          <Button
            type="gradient"
            size="small"
            onClick={e => (valid ? this.handleSubmit(e) : null)}
          >
            Login
          </Button>
        </div> */}
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
