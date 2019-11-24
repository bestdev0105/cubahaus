import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { IconButton, Button } from "@material-ui/core";

import NButton from "../../components/ButtonContainer";
import { passwordResetConfirmRequest } from "../../actions/auth";
import { PASSWORD_RESET_CONFIRM_SUCCESS } from "../../constants/auth";
import InputTextField from "../../components/InputTextField";
import Description from "../../components/ContentDescription";
import Img from "../../components/NextButton";
import lock from "../../assets/bg_lock.svg";
import next_enable from "../../assets/arrow_blue.svg";
import next_disable from "../../assets/arrow_lightblue.svg";
import "./resetPassword.scss";

const ImageWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  text-align: center;
`;

export class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password1: "",
      password2: "",
      match: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const { status } = nextProps.auth;

    if (status === PASSWORD_RESET_CONFIRM_SUCCESS) {
      this.props.history.push("/");
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { uid, token } = this.props.match.params;
    const { password1, password2 } = this.state;
    this.setState({
      match: false
    });
    if (password1 && password1 === password2)
      this.setState({
        match: true
      });

    const passwordObj = {
      uid,
      token,
      new_password1: password1,
      new_password2: password2
    };
    console.log("match", this.state.match);
    if (!this.state.match) this.props.passwordResetConfirmRequest(passwordObj);
  };

  render() {
    const { password1, password2, match } = this.state;
    const valid = password1 && password1 === password2;

    return (
      <React.Fragment>
        <div className="resetPassword">
          <div style={{ marginTop: "60px" }}>
            <h1 className="resetPassword__title">Reset Password</h1>
            <Description style={{ textAlign: "center", margin: "30px 0" }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </Description>
          </div>
          <div className="form-content">
            <form>
              {/* "Enter password" field */}
              <InputTextField
                name="password1"
                label="New password"
                type="password"
                onChange={this.handleInputChange}
                state={password1}
                margin="normal"
                className="registerInput"
              />
              <div className="space" />
              {/* "Confirm password" field */}
              <InputTextField
                name="password2"
                label="Confirm new password"
                type="password"
                onChange={this.handleInputChange}
                state={password2}
                margin="normal"
                className="registerInput"
              />
              <p id="password1ErrorMsg" className="resetPassword__errorMsg">
                {!match && "Password do not match!"}
              </p>
            </form>
          </div>

          <div className="forgot__button__container">
            <IconButton
              //   disabled={valid ? false : true}
              style={{ padding: "0px", borderRadius: "25px" }}
              onClick={e => this.handleSubmit(e)}
            >
              <NButton type="gradient" size="small">
                Next
                {/* <Img src={valid ? next_enable : next_enable} alt="" /> */}
              </NButton>
            </IconButton>
          </div>
          {/*   <div
            onClick={e => (valid ? this.handleSubmit(e) : null)}
            className={`bottomBtn ${valid ? "valid-button" : "invalid-button"}`}
          >
            <div className="gap" />
          </div>
           <ImageWrapper>
          <img src={lock} style={{ width: "50%" }} alt="" />
        </ImageWrapper> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  passwordResetConfirmRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
