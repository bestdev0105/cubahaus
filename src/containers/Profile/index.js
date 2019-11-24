import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab, withStyles } from "@material-ui/core";

import ProfileDetails from "./UserProfile";
import PasswordModify from "../../components/PasswordModify";
import {
  profileGetRequest,
  profileUpdateRequest,
  passwordChangeRequest
} from "../../actions/auth";

import "./profile.scss";
import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";

const styles = theme => ({
  root: {
    fontFamily: "Montserrat",
    fontSize: 18,
    letterSpacing: 0.9,
    textAlign: "left",
    color: "#596390"
  },
  selected: {
    fontWeight: 600
  }
});

class ProfilePage extends React.Component {
  state = {
    tabIndex: 0
  };

  componentDidMount() {
    this.props.profileGetRequest();
  }

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    const { classes, user, history } = this.props;
    const { tabIndex } = this.state;

    return (
      <>
        <Tabs
          centered
          value={tabIndex}
          onChange={this.handleTabChange}
          indicatorColor="primary"
        >
          <Tab
            label="Profile"
            classes={{ label: classes.root, selected: classes.selected }}
          />
          <Tab
            label="Password"
            classes={{ label: classes.root, selected: classes.selected }}
          />
        </Tabs>
        <div className="profile">
          <BackButton onClick={() => history.goBack()} />
          <div className="profile__title">
            <TitleText>
              {tabIndex === 0 ? "Please, put the data accordingly to your passport" : "Password"}
            </TitleText>
          </div>
          {tabIndex === 0 && (
            <ProfileDetails
              data={user}
              handleSubmit={this.props.profileUpdateRequest}
            />
          )}
          {tabIndex === 1 && (
            <PasswordModify
              title={"Change Password"}
              handleSubmit={this.props.passwordChangeRequest}
            />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.loggedInUser
});

const mapDispatchToProps = {
  profileGetRequest,
  profileUpdateRequest,
  passwordChangeRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProfilePage));
