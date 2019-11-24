import React from "react";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import { withStyles, Button } from "@material-ui/core";
import TitleText from "../../components/TitleText";
import ButtonContainer from "../../components/ButtonContainer";

import timeLeft from "../../assets/SVG/time-left.svg";
import arrow from "../../assets/SVG/right_arrow_orange.svg";
import rocket from "../../assets/SVG/rocket.svg";

import "./dashboard.scss";

const styles = {
  startButton: {
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "25px",
    fontSize: "18px",
    textTransform: "initial",
    padding: "5px 25px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    letterSpacing: "0.9px",
    color: "#ffffff"
  }
};

class Dashboard extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-90692358-1");
    ReactGA.pageview(this.props.location.pathname);
  }
  render() {
    const { user, classes } = this.props;

    return (
      <div className="content">
        <div className="dashboard">
          <TitleText>Hi, {user.first_name}!</TitleText>
          <p className="text narrow">Your document Verification Status</p>
          <div className="verificationStatus">
            <img src={timeLeft} className="timer" alt="timer" />
            <span className="statusText">Under consideration</span>
          </div>
          <div className="more">
            <span className="moreText">More</span>
            <img src={arrow} className="arrow" alt="arrow" />
          </div>
          <span className="welcomeText">Welcome to Cubahaus</span>
          <div className="description">
            <p className="text wide">
              Please select the room that you want to book this is final you
              cant go back, once you have the room, the contract will be
              generated for the room
            </p>
          </div>
          <Button
            onClick={() => this.props.history.push("/application")}
            //  className="startBtn"
            className={classes.startButton}
          >
            <img src={rocket} className="rocketImage" alt="rocket" />
            <span className="applicationButtonText">Start my application</span>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.loggedInUser
});

export default withStyles(styles)(connect(mapStateToProps)(Dashboard));
