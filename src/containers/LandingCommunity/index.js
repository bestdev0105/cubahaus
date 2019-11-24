import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles, Grid, IconButton } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";
import Signup from "../../components/Signup";
import BlogSlider from "../../components/BlogSlider";
import PhotoSlider from "../../components/PhotoSlider";
import VideoSlider from "../../components/VideoSlider";
import TestimonialSlider from "../../components/TestimonialSlider";
import { IconRocket } from "../../components/Icon";

import communityImg3 from "../../assets/landing/10.svg";
import coummunitySVG1 from "../../assets/mainSVG/community1.svg";
import communityDesktop from "../../assets/mainSVG/communityDesktop.png";
import communityPad from "../../assets/mainSVG/communityPad.png";
import communityMobile from "../../assets/mainSVG/communityMobile.png";

import "./styles.scss";
//import { Source } from "react-mapbox-gl";

const useStyles = {
  textName: {
    marginTop: "70px",
    display: "block",
    fontFamily: "Montserrat",
    fontSize: "18.5px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    textAlign: "left",
    color: "#27346e"
  },
  icon: {
    height: 85,
    width: 85,
    marginRight: 18,
    verticalAlign: "middle",
    fill: "#e6813b"
  },
  ButtonIcon: {
    height: 51,
    width: 51,
    marginRight: 7,
    verticalAlign: "middle",
    fill: "#ffffff"
  },
  commonItem: {
    flexDirection: "row",
    display: "flex",
    width: "100%"
  },
  commonIcon: {
    height: "85px",
    width: "85px",
    marginRight: "15px",
    verticalAlign: "middle",
    fill: "#e6813b"
  },
  commonText: {
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: "25.5px",
    fontWeight: "bold",
    lineHeight: 1.14,
    letterSpacing: 0.6,
    textAlign: "left",
    color: "#27346e",
    marginTop: "0px",
    marginBottom: "5px"
  },
  commonSubText: {
    fontSize: "14.5px",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontStretch: "normal",
    letterSpacing: "0.4px",
    lineHeight: 2,
    textAlign: "left",
    color: "#4c5788",
    marginBottom: "30px"
  }
};

// const Background1 = styled.div`
//   width: 356px;
//   height: 252px;
//   position: absolute;
//   background-image: url("/assets/landing/2.svg");
//   background-repeat: no-repeat;
//   background-size: inherit;
//   background-position-x: center;
//   z-index: -3;
// `;

const Title = styled.div`
  font-family: Montserrat;
  font-size: 36.5px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 0.9px;
  text-align: center;
  color: #27346e;
`;

const SubTitle = styled.div`
  font-family: Montserrat;
  font-size: 25.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 0.6px;
  text-align: left;
  color: #ed9b3f;
`;

const MainText = styled.div`
  font-family: Montserrat;
  font-size: 14.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.52;
  text-align: left;
  letter-spacing: 0.4px;
  color: #4c5788;
`;

const CSNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-image: linear-gradient(357deg, #4868ff, #0000ff 99%);
  box-shadow: 0 0 78.1px 5.9px rgba(37, 60, 158, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 29px;
  font-weight: 500;
  letter-spacing: 0.7px;
  color: #ffffff;
  margin-left: -30px;
  margin-top: -1px;
`;
const CNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-image: linear-gradient(357deg, #4868ff, #0000ff 99%);
  box-shadow: 0 0 78.1px 5.9px rgba(37, 60, 158, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 29px;
  font-weight: 500;
  letter-spacing: 0.7px;
  color: #ffffff;
  position: absolute;
  top: 0;
  margin-top: 15px;
`;

const HideLine = styled.div`
  height: 100%;
  width: 5px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: -1;
  margin-top: 75px;
`;

class LandingCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      signUpShow: false,
      width: props.width,
      eventArray: [],
      testimonialsArray: [],
      blogArray: [],
      blogAssetsArray: [],
      assetsArray: []
    };
    window.addEventListener("resize", this.updateScreenWidth);
  }

  componentDidMount() {
    axios
      .get(
        `https://cdn.contentful.com/spaces/fwv88fbbv7ho/entries?access_token=fc8a87053dbaaf7e733ab143eb2f70517b22089f5fee09dcd8c4717ff05ef777&content_type=activitiesTimeline`
      )
      .then(res => {
        const temp = _.sortBy(res.data.items, o => o.fields.rank);
        this.setState({
          eventArray: temp,
          assetsArray: res.data.includes.Asset
        });
      });
    axios
      .get(
        `https://cdn.contentful.com/spaces/fwv88fbbv7ho/entries?access_token=fc8a87053dbaaf7e733ab143eb2f70517b22089f5fee09dcd8c4717ff05ef777&content_type=testimonial`
      )
      .then(res => {
        this.setState({
          testimonialsArray: res.data.items
        });
      });
    axios
      .get(
        `https://cdn.contentful.com/spaces/fwv88fbbv7ho/entries?access_token=fc8a87053dbaaf7e733ab143eb2f70517b22089f5fee09dcd8c4717ff05ef777&content_type=blogPost`
      )
      .then(res => {
        this.setState({
          blogArray: res.data.items,
          blogAssetsArray: res.data.includes.Asset
        });
      });
  }

  componentWillMount() {
    this.updateScreenWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  }

  updateScreenWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    if (auth.error) {
      this.setState({});
    }
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop - 170);

  knowmore = e => {
    console.log(this.myRef, this.myRef1);
    this.scrollToMyRef();
  };

  handleOpenSignup = e => {
    this.setState({
      signUpShow: true
    });
  };

  onClose = e => {
    this.setState({ signInShow: false, signUpShow: false });
  };

  findUrl = event => {
    console.log("assetsArray", this.state.assetsArray);
    let url = "";
    this.state.assetsArray.map(asset => {
      if (asset.sys.id === event.fields.eventIcon.sys.id) {
        url = asset.fields.file.url;
      }
    });
    return url;
  };

  findImageUrl = event => {
    let url = "";
    this.state.assetsArray.map(asset => {
      if (asset.sys.id === event.fields.eventImage.sys.id) {
        url = asset.fields.file.url;
      }
    });
    return url;
  };

  render() {
    const { classes } = this.props;
    const {
      width,
      eventArray,
      testimonialsArray,
      blogArray,
      blogAssetsArray
    } = this.state;
    // const isPad = width >= 600 && 1200 >= width ? true : false;
    const isMobile = width <= 600 ? true : false;
    return (
      <div className="landingCommunity">
        <Signup open={this.state.signUpShow} onClose={this.onClose} />
        <Grid className="landingCommunity__section1">
          <div>
            <img
              src={
                width > 1200
                  ? communityDesktop
                  : width > 600
                  ? communityPad
                  : communityMobile
              }
              className="landingCommunity__section1__img"
              alt=""
            />
            <div className="landingCommunity__section1__body">
              {/* <div className="landingCommunity__section1__body__bigTitle">
                <p>Good Vibes only</p>
                <span>#</span>
              </div>
              <p className="landingCommunity__section1__body__title1">
                #cubahaus----------
              </p>*/}
              {width < 1201 && (
                <p className="landingCommunity__section1__body__text">
                  Welcome to
                  {width < 600 && <br />} our Community page!
                </p>
              )}
              <IconButton
                style={{ padding: "0px", borderRadius: "33px" }}
                onClick={this.knowmore}
              >
                <div className="landingCommunity__section1__body__blueButton">
                  Know more
                </div>
              </IconButton>
            </div>
          </div>
        </Grid>
        {/* <Grid className="landingCommunity__section2">
          <Title>
            Here are the events you'll have
            <br />
            whie staying with CubaHaus community:
          </Title>
          <div ref={this.myRef} className="landingCommunity__section2__images">
            <img
              src={communityImg1}
              className="landingCommunity__section2__img"
              alt=""
            />
            <img
              src={coummunitySVG2}
              className="landingCommunity__section2__img"
              alt=""
            />
          </div>
        </Grid> */}
        <Grid className="landingCommunity__section2">
          <div className="landingCommunity__section2__img" />
          <div className="landingCommunity__section2__img1" />
          <div className="landingCommunity__section2__img2" />
          <div className="landingCommunity__section2__body">
            <p className="landingCommunity__section2__title">Photos</p>
          </div>
          <div className="landingCommunity__section2__blog">
            <PhotoSlider
              showCount={width > 1200 ? 3 : width > 900 ? 2 : 1}
              className="landingCommunity__section2__blog__web"
              blogArray={blogArray}
              blogAssetsArray={blogAssetsArray}
            />
          </div>
        </Grid>
        <Grid className="landingCommunity__section3">
          <div className="landingCommunity__section3__body">
            <p className="landingCommunity__section3__title">Video</p>
          </div>
          <div
            className="landingCommunity__section3__items"
            style={{ flexDirection: "row-reverse" }}
          >
            <VideoSlider
              width={width}
              className="landingCommunity__section3__video"
            />
            <div className="landingCommunity__section3__img1" />
          </div>
        </Grid>
        <Grid className="landingCommunity__section4">
          <div className="landingCommunity__section4__backgroundImg" />
          <div className="landingCommunity__section4__img2" />
          <Title>Testimonials</Title>
          <div className="landingCommunity__section4__body">
            {!isMobile && (
              <img
                alt=""
                src={communityImg3}
                className="landingCommunity__section4__body__img"
              />
            )}
            <TestimonialSlider testimonialsArray={testimonialsArray} />
          </div>
        </Grid>
        {/* <Grid className="landingCommunity__section5">
          <div className="landingCommunity__section5__body">
            <p className="landingCommunity__section5__body__title">
              Anna Doe&nbsp;&nbsp;&nbsp;
            </p>
            <p className="landingCommunity__section5__body__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </div>
          <div className="landingCommunity__section5__mobile">
            <img
              alt=""
              src={coummunitySVG10}
              className="landingCommunity__section5__mobile__img"
            />
          </div>
        </Grid>

        <Grid className="landingCommunity__section6">
          <div className="landingCommunity__section6__body">
            <p className="landingCommunity__section6__title">
              Do you want to rent a room?
            </p>
            <p className="landingCommunity__section6__text">
              Please, press an Apply button to pick your dream room
            </p>
            <IconButton
              className="landingCommunity__section6__buttonApply"
              //  onClick={this.handleOpenSignup}
              component={Link}
              to="/register"
              style={{ padding: "unset" }}
            >
              <IconRocket className={classes.ButtonIcon} />
              Apply
            </IconButton>
          </div>
        </Grid> */}
        <Grid className="landingCommunity__section7">
          <div
            //  src={backgroundImg}
            //  alt=""
            className="landingCommunity__section7__img"
          />
          <div className="landingCommunity__section7__body">
            <p className="landingCommunity__section7__title">Blog</p>
            <p className="landingCommunity__section7__text">
              Lorem ipsum dolor sit amet,{" "}
              <b>consectetur dipisicing edit, sed do </b>eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="landingCommunity__section7__blog">
            <BlogSlider
              showCount={width > 1200 ? 3 : width > 900 ? 2 : 1}
              className="landingCommunity__section7__blog__web"
              blogArray={blogArray}
              blogAssetsArray={blogAssetsArray}
            />
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

const styledLanding = withStyles(useStyles)(LandingCommunity);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledLanding);
