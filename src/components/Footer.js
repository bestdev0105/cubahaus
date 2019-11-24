import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { IconButton, withStyles } from "@material-ui/core";

// import logoMobile from "../assets/logotype.svg";
// import logoDesktop from "../assets/logo.svg";

import facebookIcon from "../assets/SVG/facebook-logo.svg";
import instagramIcon from "../assets/SVG/instagram.svg";

const FooterDiv = styled.div`
  filter: drop-shadow(0 -5px 10px rgba(37, 60, 158, 0.46));
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 96px;
  clip-path: ellipse(70% 93% at 50% 100%);
  background: ${props =>
    props.isLoggedIn
      ? ""
      : "linear-gradient(357deg, #4868ff, #0000ff 99%), linear-gradient(to bottom, #ffffff, #ffffff)"};
`;

const WrapperContent = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding-top: 29px;
  display: flex;
  justify-content: "space-between";
  align-items: center;
`;

const UserIcon = styled.img`
  width: 27px;
  height: 27;
  filter: invert(1);
`;

const MenuText = styled.span`
  font-size: 14px;
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
  color: ${props => (props.isLoggedIn ? `#4c5788` : `#ffffff`)};
  display: ${props => (props.isHome || !props.isLoggedIn ? "block" : "none")};
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

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorEl: null,
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
  onClickSettingIcon = e => {
    // this.setState({
    //   open: true,
    //   anchorEl: e.currentTarget
    // });
    // window.location.replace("http://www.google.com");
  };

  handleClose = e => {
    this.setState({
      open: false,
      anchorEl: null
    });
  };

  render() {
    const { open, anchorEl, width } = this.state;
    const {
      isLoggedIn,
      onClickLogo,
      onClickLogout,
      classes,
      pathName,
      user
    } = this.props;
    const isHome = pathName === "/book";
    return (
      <React.Fragment>
        {1000 >= width ? (
          <FooterDiv>
            <Wrapper isHome={isHome}>
              <WrapperContent
                isHome={isHome}
                style={{ justifyContent: "center" }}
              >
                <div>
                  <MenuText>Follow us on social media:</MenuText>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={() =>
                      window.location.replace(
                        "https://www.facebook.com/Cubahaus"
                      )
                    }
                    color="inherit"
                  >
                    <UserIcon src={facebookIcon} alt="user" />
                  </IconButton>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={() =>
                      window.location.replace(
                        "https://www.instagram.com/cubahaus/"
                      )
                    }
                    color="inherit"
                  >
                    <UserIcon src={instagramIcon} alt="user" />
                  </IconButton>
                </div>
              </WrapperContent>
            </Wrapper>
          </FooterDiv>
        ) : (
          <FooterDiv>
            <Wrapper isHome={isHome}>
              <WrapperContent isHome={isHome}>
                <div>
                  <MenuText>Follow us on social media:</MenuText>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={() =>
                      window.location.replace(
                        "https://www.facebook.com/Cubahaus"
                      )
                    }
                    color="inherit"
                  >
                    <UserIcon src={facebookIcon} alt="user" />
                  </IconButton>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={() =>
                      window.location.replace(
                        "https://www.instagram.com/cubahaus/"
                      )
                    }
                    color="inherit"
                  >
                    <UserIcon src={instagramIcon} alt="user" />
                  </IconButton>
                </div>

                <React.Fragment>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "absolute",
                      right: 0
                    }}
                  >
                    <IconButton
                      component={Link}
                      to="/community"
                      color="inherit"
                    >
                      <MenuText>Our Community</MenuText>
                    </IconButton>
                    <IconButton component={Link} to="/#" color="inherit">
                      <MenuText>Blog</MenuText>
                    </IconButton>
                    <IconButton component={Link} to="/register" color="inherit">
                      <MenuText>Apply</MenuText>
                    </IconButton>
                    <IconButton component={Link} to="/faq" color="inherit">
                      <MenuText>FAQ</MenuText>
                    </IconButton>
                    <IconButton component={Link} to="/#" color="inherit">
                      <MenuText>Terms & Conditions</MenuText>
                    </IconButton>
                  </div>
                </React.Fragment>
              </WrapperContent>
            </Wrapper>
          </FooterDiv>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.loggedInUser
});

export default withStyles(styles)(connect(mapStateToProps)(Footer));
