import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../../actions/auth";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import mobilebackground from "../../assets/landing/background2.svg";

const Background = styled.div`
  width: 100%;
  height: 708px;
  position: absolute;
  bottom: 0;
  background-image: url("/assets/background1.png");
  background-size: inherit;
  background-position-x: center;
  z-index: -2;
`;

const HomeBackground = styled.div`
  width: 55%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  background-image: url("/assets/background2.png");
  background-size: inherit;
  background-position-y: center;
  display: ${props => (props.isHome ? "block" : "none")};
`;

const HomeBackgroundImage = styled.div`
  max-width: 784px;
  width: 85%;
  height: 642px;
  background-image: url(/assets/people.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  margin-top: 135px;
`;

class DefaultLayout extends React.PureComponent {
  onClickLogo = () => {
    this.props.history.push("/");
  };

  onClickProfile = () => {
    this.props.history.push("/profile");
  };

  onClickLogout = () => {
    this.props.logoutRequest();
  };

  render() {
    const { isLoggedIn, children, location } = this.props;
    return (
      <div
        className={isLoggedIn ? "container" : ""}
        style={{ overflowX: "hidden" }}
      >
        <Header
          isLoggedIn={isLoggedIn}
          onClickLogo={this.onClickLogo}
          onClickProfile={this.onClickProfile}
          onClickLogout={this.onClickLogout}
          pathName={location.pathname}
        />
        {/* <div className={isLoggedIn ? "content" : ""}>{children}</div> */}
        <div className={isLoggedIn ? "" : ""}>{children}</div>
        {isLoggedIn && <Background />}
        <HomeBackground
          className="background1"
          isHome={location.pathname === "/book"}
        >
          <HomeBackgroundImage />
        </HomeBackground>
        {location.pathname === "/book" && (
          <div className="mobilebackground">
            <img
              src={require("../../assets/landing/background2.png")}
              alt=""
              className="mobilebackground__background"
            />
            <img
              src={require("../../assets/landing/people.png")}
              alt=""
              className="mobilebackground__img"
            />
          </div>
        )}

        {!isLoggedIn && (
          <Footer
            isLoggedIn={isLoggedIn}
            onClickLogo={this.onClickLogo}
            onClickProfile={this.onClickProfile}
            onClickLogout={this.onClickLogout}
            pathName={location.pathname}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.loggedInUser !== null
});

const mapDispatchToProps = {
  logoutRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
