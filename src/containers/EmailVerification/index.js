import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton, Button } from "@material-ui/core";
import NButton from "../../components/ButtonContainer";

import "./emailVerification.scss";

export class EmailVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailVerified: false
    };
  }

  componentWillMount() {
    console.log("verify", this.props);
    this.verifyEmail();
  }

  verifyEmail = () => {
    const verificationToken = this.props.match.params.token;
    const tokenObj = {
      key: verificationToken
    };

    // POST request to Cubahaus API
    fetch(
      "https://cubahaus-api.herokuapp.com/accounts/registration/verify-email/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tokenObj)
      }
    ).then(response => {
      if (response.ok) {
        this.setState({ emailVerified: true });
      } else {
        alert("Couldn't verify email");
      }
    });
  };

  render() {
    const { emailVerified } = this.state;

    if (!emailVerified) {
      return (
        <div className="emailVerification">
          <h1>Verifying email...</h1>
        </div>
      );
    }

    return (
      <div className="emailVerification">
        <h1 className="emailVerification-title">
          Your email has been verified!
        </h1>
        <div className="forgot__button__container">
          <IconButton
            style={{ padding: "0px", borderRadius: "25px" }}
            onClick={e => this.props.history.push("/login")}
          >
            <NButton type="gradient" size="back">
              Back to login
            </NButton>
          </IconButton>
        </div>
      </div>
    );
  }
}

export default connect()(EmailVerification);
