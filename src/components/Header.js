import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import { IconButton, Menu, MenuItem, withStyles } from "@material-ui/core";

// import logoMobile from "../assets/logotype.svg";
// import logoDesktop from "../assets/logo.svg";

import helpIcon from "../assets/SVG/information.svg";
import userIcon from "../assets/SVG/user.svg";
import rocketIcon from "../assets/SVG/rocket.svg";
import menuIcon from "../assets/SVG/menu.svg";
import closeIcon from "../assets/SVG/close.svg";
import whiteLogo from "../assets/mainSVG/logo_white.png";
import blackLogo from "../assets/mainSVG/logo_black.png";

// import Login from "./Login";
// import Signup from "./Signup";

const HeaderIcon = styled.img`
  width: 27px;
  height: 27px;
  filter: invert(1);
`;

const Wrapper = styled.div`
  width: ${props => (props.menuopen ? "100%" : "100%")};
  height: ${props => (props.menuopen ? "310px" : "96px")};
  z-index: 1;
  box-shadow: 0 0 78.1px 5.9px rgba(37, 60, 158, 0.46);
  clip-path: ${props =>
    props.menuopen
      ? "ellipse(90% 61% at 50% 39%)"
      : " ellipse(70% 93% at 50% 0%)"};
  position: relative;
  background-color: whitesmoke;
  background: ${props =>
    props.isHome
      ? props.width > 501
        ? "hsla(0,0%,100%,.21)"
        : "linear-gradient(136deg, #f2b143 1%, #e6813b 99%), linear-gradient(to bottom, #ffffff, #ffffff) "
      : props.isLoggedIn
      ? "linear-gradient(357deg, #4868ff, #0000ff 99%), linear-gradient(to bottom, #ffffff, #ffffff)"
      : "linear-gradient(136deg, #f2b143 1%, #e6813b 99%), linear-gradient(to bottom, #ffffff, #ffffff) "};
  padding-bottom: 20px;
  padding-left: ${props => (props.menuopen ? "unset" : "15px")};
  border-bottom-left-radius: ${props => (props.menuopen ? "unset" : "15px")};
  border-bottom-right-radius: ${props => (props.menuopen ? "unset" : "15px")};
`;

const WrapperContent = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding-top: 29px;
  display: flex;
  justify-content: ${props =>
    props.isHome || !props.isLoggedIn ? "space-between" : "center"};
  align-items: center;
`;

const HelpIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(1);
`;

const UserIcon = styled.img`
  width: 27px;
  height: 27px;
  filter: invert(1);
`;
const MenuIcon = styled.img`
  width: 43px;
  height: 30px;
  filter: invert(1);
`;
const UserName = styled.span`
  font-size: 19.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fefeff;
  display: ${props => (props.isHome ? "block" : "none")};
`;

const MenuText = styled.span`
  padding-right: 12px;
  padding-left: 12px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.9;
  text-align: left;
  color: #ffffff;
`;

const UnderLine = styled.div`
  margin-left: 20px;
  height: 1px;
  width: 96%;
  opacity: 0.33;
  background-color: #ffffff;
`;

const MenuTextApply = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.9;
  text-align: left;
  color: #ffffff;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.9;
  text-align: left;
  color: ${props =>
    props.isLoggedIn ? "rgb(6, 87, 136)" : "rgb(255, 255, 255)"};
  display: ${props => (props.isHome || !props.isLoggedIn ? "block" : "none")};
`;

const Logo = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.9;
  text-align: left;
  color: #ffffff;
  display: ${props => (props.isHome || !props.isLoggedIn ? "none" : "block")};
`;

const styles = {
  // WrapperShadow: {
  //   width: "100%",
  //   height: 96,
  //   position: "absolute",
  //   top: -6,
  //   zIndex: -1,
  //   boxShadow: "0 0 78.1px 5.9px rgba(37, 60, 158, 0.46)",
  //   borderRadius: "0 0 50% 50%",
  // },
  content: {
    maxWidth: 1000,
    width: "90%",
    margin: "0 auto",
    paddingTop: 29
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      menuopen: false,
      anchorEl: null,
      signInShow: false,
      signUpShow: false,
      width: props.width
    };

    window.addEventListener("resize", this.updateScreenWidth);
  }

  componentWillMount() {
    this.updateScreenWidth();
  }

  updateScreenWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    if (auth) {
      this.setState({
        signInShow: false
      });
    }
    if (this.props.pathName !== nextProps.pathName) {
      this.handleMenuClose();
    }
  }

  onClickSettingIcon = e => {
    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  };

  handleClose = e => {
    this.setState({
      open: false,
      anchorEl: null
    });
  };

  handleMenuClose = e => {
    this.setState({
      menuopen: false
    });
  };

  handleMenuOpen = e => {
    this.setState({
      menuopen: true
    });
  };

  handleOpenLogin = () => {
    // this.setState({
    //   signInShow: true,
    //   menuopen: false
    // });
  };

  handleOpenSignup = e => {
    // this.props.history.push("/register");
    // this.setState({
    //   signUpShow: true
    // });
  };

  onClose = e => {
    this.setState({ signInShow: false, signUpShow: false });
  };

  onContactUs = () => {
    if (this.props.location.pathname === "/") {
      this.props.history.push({
        ...this.props.history.location,
        state: { contactUs: true }
      });
    } else {
      this.props.history.push({
        pathname: "/",
        state: {
          contactUs: true
        }
      });
    }
  };

  render() {
    const {
      open,
      menuopen,
      anchorEl,
      signInShow,
      signUpShow,
      width
    } = this.state;
    const {
      isLoggedIn,
      //     onClickLogo,
      onClickLogout,
      //      classes,
      pathName,
      user
    } = this.props;
    const isHome = pathName === "/book";
    var headerWidth;
    isLoggedIn ? (headerWidth = 0) : (headerWidth = 1000);

    return (
      <div style={{ position: "relative", zIndex: 99 }}>
        {headerWidth >= width ? (
          <div>
            {/* <Login open={this.state.signInShow} onClose={this.onClose} />
            <Signup open={this.state.signUpShow} onClose={this.onClose} /> */}
            <div
              style={
                this.props.pathName === "/"
                  ? {
                      backgroundColor: "transparent",
                      filter: "drop-shadow(0 6px 10px rgba(37, 60, 158, 0.46))"
                    }
                  : {
                      filter: "drop-shadow(0 6px 10px rgba(37, 60, 158, 0.46))"
                    }
              }
            >
              <Wrapper className="wrapperHeader" menuopen={menuopen}>
                {/* style={
                  menuopen
                    ? {
                        height: "310px",
                        clipPath: "ellipse(90% 61% at 50% 39%)",
                        //    clipPath: "ellipse(120% 61% at 50% 39%)",
                        paddingBottom: "20px",
                        borderRadius: "unset"
                      }
                    : {
                        paddingBottom: "20px",
                        paddingLeft: "15px",
                        width: "97%"
                      }
                } */}
                <div
                  style={
                    this.props.pathName === "/"
                      ? {
                          //   backgroundColor: "whitesmoke",
                          padding: "15px 15px 15px 0 "
                        }
                      : { padding: "15px 15px 15px 0 " }
                  }
                >
                  {/* <LogoText
                    isHome={isHome}
                    isLoggedIn={isLoggedIn}
                    style={{ textAlign: "center" }}
                  >
                    CubaHaus
                  </LogoText> */}
                  <Link to="/">
                    <img
                      src={whiteLogo}
                      style={{
                        height: "30px",
                        marginLeft: width > 500 ? "45%" : "40%"
                      }}
                      alt=""
                    />
                  </Link>
                  {!menuopen ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "-15px"
                      }}
                    >
                      <IconButton
                        aria-owns={open ? "menu-appbar" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenuOpen}
                        color="inherit"
                        style={{
                          padding: "0px"
                        }}
                      >
                        <MenuIcon src={menuIcon} alt="user" />
                      </IconButton>
                      <IconButton
                        // onClick={() => { this.handleOpenSignup(); }}
                        component={Link}
                        to="/register"
                        style={{
                          padding: "0px",
                          border: "1px solid #ffffff",
                          width: "105px",
                          height: "40px",
                          borderRadius: "22px",
                          marginRight: "15px"
                        }}
                      >
                        <HeaderIcon src={rocketIcon} alt="" />
                        <MenuTextApply
                          style={{
                            fontWeight: signUpShow ? "bold" : "normal"
                          }}
                        >
                          Apply
                        </MenuTextApply>
                      </IconButton>
                    </div>
                  ) : (
                    <div style={{ marginTop: "-15px" }}>
                      <IconButton
                        aria-owns={open ? "menu-appbar" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenuClose}
                        color="inherit"
                        style={{
                          display: "block",
                          padding: "0px",
                          marginLeft: "20px"
                        }}
                      >
                        <UserIcon src={closeIcon} alt="user" />
                      </IconButton>
                      <IconButton component={Link} to="/" color="inherit">
                        <MenuText
                          style={{
                            fontWeight:
                              pathName === "/" && !signInShow && !signUpShow
                                ? "bold"
                                : "normal"
                          }}
                        >
                          Home
                        </MenuText>
                      </IconButton>
                      <UnderLine />
                      <IconButton
                        component={Link}
                        to="/community"
                        color="inherit"
                      >
                        <MenuText
                          style={{
                            fontWeight:
                              pathName === "/community" &&
                              !signInShow &&
                              !signUpShow
                                ? "bold"
                                : "normal"
                          }}
                        >
                          Community
                        </MenuText>
                      </IconButton>
                      <UnderLine />
                      <IconButton component={Link} to="/faq" color="inherit">
                        <MenuText
                          style={{
                            fontWeight:
                              pathName === "/faq" && !signInShow && !signUpShow
                                ? "bold"
                                : "normal"
                          }}
                        >
                          FAQ
                        </MenuText>
                      </IconButton>
                      <UnderLine />
                      <IconButton
                        component={Link}
                        to={{ pathname: "/", state: { contactUs: true } }}
                        color="inherit"
                      >
                        <MenuText
                          style={{
                            fontWeight:
                              pathName === "/contactus" &&
                              !signInShow &&
                              !signUpShow
                                ? "bold"
                                : "normal"
                          }}
                        >
                          Contact Us
                        </MenuText>
                      </IconButton>
                      <UnderLine />
                      <IconButton
                        //  onClick={() => { this.handleOpenLogin();  }}
                        component={Link}
                        to="/login"
                        style={{
                          padding: "0px",
                          border: "1px solid #ffffff",
                          width: "105px",
                          height: "40px",
                          borderRadius: "20px",
                          marginLeft: "20px",
                          marginTop: "10px"
                        }}
                      >
                        <MenuTextApply
                          style={{
                            fontWeight: "bold"
                          }}
                        >
                          Log in
                        </MenuTextApply>
                      </IconButton>
                    </div>
                  )}
                </div>
              </Wrapper>
            </div>
          </div>
        ) : (
          <div>
            {/* <Login open={this.state.signInShow} onClose={this.onClose} />
            <Signup open={this.state.signUpShow} onClose={this.onClose} /> */}
            <div
              style={
                this.props.pathName === "/"
                  ? {
                      backgroundColor: "transparent",
                      filter: "drop-shadow(0 6px 10px rgba(37, 60, 158, 0.46))"
                    }
                  : {
                      filter: "drop-shadow(0 6px 10px rgba(37, 60, 158, 0.46))"
                    }
              }
            >
              <Wrapper isHome={isHome} isLoggedIn={isLoggedIn} width={width}>
                <WrapperContent isHome={isHome} isLoggedIn={isLoggedIn}>
                  {/* <LogoText isHome={isHome} isLoggedIn={isLoggedIn}>
                    CubaHaus
                  </LogoText> */}
                  <Link to="/">
                    <img
                      src={isHome && width > 500 ? blackLogo : whiteLogo}
                      style={
                        isHome && width > 500
                          ? { height: "20px" }
                          : { height: "40px" }
                      }
                      alt=""
                    />
                  </Link>
                  {/* <Logo isHome={isHome} isLoggedIn={isLoggedIn}>
                    Logo
                  </Logo> */}
                  {isLoggedIn ? (
                    <React.Fragment>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          position: "absolute",
                          right: 0
                        }}
                        className="loggedinUsername"
                      >
                        <IconButton
                          arial-label="Help"
                          component={Link}
                          to="/help"
                          color="inherit"
                        >
                          <HelpIcon src={helpIcon} alt="information" />
                        </IconButton>
                        <IconButton
                          aria-owns={open ? "menu-appbar" : undefined}
                          aria-haspopup="true"
                          onClick={this.onClickSettingIcon}
                          color="inherit"
                        >
                          <UserIcon src={userIcon} alt="user" />
                        </IconButton>
                        <UserName isHome={isHome}>
                          {user.first_name} {user.last_name}
                        </UserName>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem component={Link} to="/profile">
                            Profile
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              this.handleClose();
                              onClickLogout();
                            }}
                          >
                            Logout
                          </MenuItem>
                        </Menu>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          position: "absolute",
                          right: 0
                        }}
                      >
                        <IconButton component={Link} to="/" color="inherit">
                          <MenuText
                            style={{
                              fontWeight:
                                pathName === "/" && !signInShow && !signUpShow
                                  ? "bold"
                                  : "normal"
                            }}
                          >
                            Home
                          </MenuText>
                        </IconButton>
                        <IconButton
                          component={Link}
                          to="/community"
                          color="inherit"
                        >
                          <MenuText
                            style={{
                              fontWeight:
                                pathName === "/community" &&
                                !signInShow &&
                                !signUpShow
                                  ? "bold"
                                  : "normal"
                            }}
                          >
                            Community
                          </MenuText>
                        </IconButton>
                        <IconButton component={Link} to="/faq" color="inherit">
                          <MenuText
                            style={{
                              fontWeight:
                                pathName === "/faq" &&
                                !signInShow &&
                                !signUpShow
                                  ? "bold"
                                  : "normal"
                            }}
                          >
                            FAQ
                          </MenuText>
                        </IconButton>
                        {/* component={Link}
                          to={{ pathname: "/", state: { contactUs: true } }} */}
                        <IconButton onClick={this.onContactUs} color="inherit">
                          <MenuText
                            style={{
                              fontWeight:
                                pathName === "/contactus" &&
                                !signInShow &&
                                !signUpShow
                                  ? "bold"
                                  : "normal"
                            }}
                          >
                            Contact Us
                          </MenuText>
                        </IconButton>

                        <IconButton
                          //  onClick={() => { this.handleOpenLogin(); }}
                          component={Link}
                          to="/login"
                        >
                          <MenuText
                            style={{
                              fontWeight:
                                pathName === "/login" ? "bold" : "normal"
                            }}
                          >
                            Log in
                          </MenuText>
                        </IconButton>
                        {/* <IconButton component={Link} to="/" color="inherit"> */}
                        <IconButton
                          //  onClick={() => { this.handleOpenSignup(); }}
                          component={Link}
                          to="/register"
                          style={{
                            border: "1px solid #ffffff",
                            width: "130px",
                            height: "45px",
                            borderRadius: "22px",
                            padding: "unset"
                          }}
                        >
                          <HeaderIcon src={rocketIcon} alt="" />
                          <MenuTextApply
                            style={{
                              fontWeight:
                                pathName === "/register" ? "bold" : "normal"
                            }}
                          >
                            Apply
                          </MenuTextApply>
                        </IconButton>
                      </div>
                    </React.Fragment>
                  )}
                </WrapperContent>
              </Wrapper>
            </div>
            {/* <div className={classes.WrapperShadow}/> */}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.loggedInUser
});

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      null
    )(Header)
  )
);
