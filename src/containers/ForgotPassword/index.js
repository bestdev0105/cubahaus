import React from "react";
import { connect } from "react-redux";
import { IconButton, Button } from "@material-ui/core";

import NButton from "../../components/ButtonContainer";
import { passwordResetRequest } from "../../actions/auth";
import { PASSWORD_RESET_SUCCESS } from "../../constants/auth";
import InputTextField from "../../components/InputTextField";
import rightArrow from "../../assets/SVG/right_arrow.svg";
import TitleText from "../../components/TitleText";
import "./forgotPassword.scss";
// import Button from "../../components/ButtonContainer";
import { Grid } from "@material-ui/core";
export class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { status } = nextProps.auth;
    if (status === PASSWORD_RESET_SUCCESS) {
      nextProps.history.push("/checkEmail");
    }
  }

  handleInputChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email } = this.state;
    this.props.passwordResetRequest({ email });
  };

  render() {
    const { email } = this.state;
    return (
      <div className="forgot">
        <div className="forgot__title">
          <TitleText>Forgot Password?</TitleText>
        </div>
        <Grid container justify="center" className="forgotForm">
          <Grid item xs={12} md={6} lg={6}>
            <form className="forgotPassword">
              <InputTextField
                name="email"
                label="Email address"
                type="email"
                onChange={this.handleInputChange}
                state={email}
                margin="normal"
                className="forgotPassword-input"
              />
            </form>
            <div className="forgot__button__container">
              <IconButton
                style={{ padding: "0px", borderRadius: "25px" }}
                onClick={e => (email ? this.handleSubmit(e) : null)}
              >
                <NButton type="gradient" size="small">
                  Next
                  <img
                    src={rightArrow}
                    className="form__arrow form__arrow--right"
                    alt="rightArrow"
                  />
                </NButton>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  passwordResetRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
