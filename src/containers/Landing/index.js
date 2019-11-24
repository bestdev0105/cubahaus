import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, withStyles, Grid, IconButton } from "@material-ui/core";
import styled from "styled-components";
import Drift from "react-driftjs";
import axios from "axios";

import ErrorMessage from "../../components/ErrorMessage";
import Signup from "../../components/Signup";
import Button from "../../components/ButtonContainer";
import InputTextField from "../../components/InputTextField";
import LandingSlider from "../../components/LandingSlider";
import LandingMobileSlider from "../../components/LandingMobileSlider";
import contactImg from "../../assets/landing/17.svg";
import situationImg from "../../assets/mainSVG/calque7.png";
import situationImgM from "../../assets/mainSVG/calque3.png";
import includedImg from "../../assets/landing/3.svg";
import home1 from "../../assets/mainSVG/home1.png";
import home2 from "../../assets/mainSVG/home2.png";
import home3 from "../../assets/mainSVG/home3.png";
import home4 from "../../assets/mainSVG/home4.svg";
import backgroundImg from "../../assets/mainSVG/homebackground1.svg";
import uniteImg from "../../assets/landing/1.png";
import titlebackground from "../../assets/mainSVG/homebackground11.svg";

import {
  IconGlobal,
  IconDebate,
  IconBreakfast,
  IconHotel,
  IconWifi,
  IconFlash,
  IconShower,
  IconKitchen,
  IconWashingMachine,
  IconThermometer,
  IconRocket,
  IconMountains,
  IconHighfive,
  IconBicycle,
  IconUniversity,
  IconBooks,
  IconBike
} from "../../components/Icon";

import "./landing.scss";
import Axios from "axios";

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
    height: 55,
    width: 55,
    marginRight: 18,
    verticalAlign: "middle",
    fill: "#e6813b"
  },
  ButtonIcon: {
    height: 55,
    width: 55,
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
    height: "62px",
    width: "62px",
    marginRight: "25px",
    verticalAlign: "top",
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

const Background1 = styled.div`
  width: 356px;
  height: 252px;
  position: absolute;
  background-image: url("/assets/landing/2.svg");
  background-repeat: no-repeat;
  background-size: inherit;
  background-position-x: center;
  clip-path: ellipse(90% 55% at 56% 16%);
`;

const Title = styled.div`
  font-family: Montserrat;
  font-size: 47.5px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 1.2px;
  color: #4c5788;
`;

const MainText = styled.div`
  font-family: Montserrat;
  font-size: 18.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.97;
  text-align: left;
  letter-spacing: 0.2px;
  margin-top: 42px;
  margin-bottom 61px;
  color: rgba(39, 52, 110, 0.73);
`;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef1 = React.createRef();
    this.state = {
      signUpShow: false,
      width: props.width,

      firstName: "",
      lastName: "",
      email: "",
      message: ""
    };

    window.addEventListener("resize", this.updateScreenWidth);
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.contactUs)
      this.scrollToMyRef1();
    //  this.knowmore();
  }

  componentDidUpdate() {
    if (this.props.location.state && this.props.location.state.contactUs)
      this.scrollToMyRef1();
  }

  componentWillMount() {
    this.updateScreenWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  }

  scrollToMyRef1 = () =>
    window.scrollTo(0, this.myRef1.current.offsetTop - 100);
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop - 10);

  knowmore = e => {
    this.scrollToMyRef();
  };

  updateScreenWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  handleOpenSignup = e => {
    this.setState({
      signUpShow: true
    });
  };

  onClose = e => {
    this.setState({ signInShow: false, signUpShow: false });
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
      firstnameError: false,
      lastnameError: false,
      emailError: false,
      messageError: false
    });
  };

  send = e => {
    e.preventDefault();

    const { registerRequest } = this.props;
    const { firstName, lastName, email, message } = this.state;
    if (firstName === "" || lastName === "") {
      this.setState({ usernameError: true });
    } else if (email === "") {
      this.setState({ emailError: true });
    } else if (message === "") {
      this.setState({ messageError: true });
    } else {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message
      };
      axios({
        method: "post",
        url: "https://4d99wr2yy3.execute-api.us-east-1.amazonaws.com/prod",
        data: formData,
        config: { headers: { "Cotent-Type": "multipart/form-data" } }
      }).then(res => {
        if (res.data.message === "SUCCESS") {
          console.log(res);
          alert("we got your message, we will reply as soon as possible");
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    const {
      width,
      firstName,
      lastName,
      message,
      email,
      firstnameError,
      lastnameError,
      emailError,
      messageError
    } = this.state;
    const isPad = width >= 600 && 1300 >= width ? true : false;
    const isMobile = width <= 600 ? true : false;
    return (
      <div className="landing">
        <Signup open={this.state.signUpShow} onClose={this.onClose} />
        {/* <img
          alt="backgroundImg"
          src={backgroundImg}
          className="section1__backgroundImg"
        /> */}
        <Grid className="section1">
          <div className="section1__unite">
            <img
              alt="backgroundImg"
              src={uniteImg}
              className="section1__unite__img"
            />
            <div className="section1__unite__body">
              <Title>Unite Great Minds</Title>
              <MainText>
                Welcome to Montreal. Come join our community and rent your room
                in our very special home.
              </MainText>
              <IconButton
                className="section1__unite__body__button"
                onClick={this.knowmore}
              >
                Know more
              </IconButton>
            </div>

            {/* <Background1 className="section1__unite__background1" /> */}
          </div>
          <div className="section1__background" />
        </Grid>
        <Grid className="section2">
          <div ref={this.myRef} className="section2__housing">
            <div className="section2__housing__slider">
              <LandingSlider />
            </div>
            <div className="section2__housing__mobileslider">
              <LandingMobileSlider />
            </div>

            <div
              className="section2__housing__body"
              ref={divElement => (this.divElement = divElement)}
            >
              <Title>
                All-Inclusive <br />
                Student Housing
              </Title>
              <MainText
                style={{
                  lineHeight: 2.57,
                  width: "490px",
                  marginBottom: "unset"
                }}
              >
                In short, we're <b>renting furnished rooms!</b>
                <br />
                Cubahaus is a<b> community of international students </b>
                and young professionals
                <b> sharing our timein Montreal together. </b>
                We live in the same neighbourhood, but in separate apartments.
              </MainText>
            </div>
          </div>
          <div
            className="section2__included"
            style={isPad ? { width: { width } } : null}
          >
            <div className="section2__included__body">
              <Title>What's Included?</Title>
              <div className="section2__included__body__items">
                <div>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconThermometer className={classes.icon} />
                    Heating
                  </Typography>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconFlash className={classes.icon} />
                    Electricity
                  </Typography>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconWashingMachine className={classes.icon} />
                    Washer & Dryer
                  </Typography>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconHotel className={classes.icon} />
                    Fully furnished
                  </Typography>
                </div>
                <div>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconShower className={classes.icon} />
                    Hot Water
                  </Typography>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconWifi className={classes.icon} />
                    Internet
                  </Typography>
                  <Typography
                    inline
                    gutterBottom={false}
                    variant="h5"
                    component="h2"
                    className={classes.textName}
                  >
                    <IconKitchen className={classes.icon} />
                    Kitchen
                  </Typography>
                </div>
              </div>
            </div>
            <img
              alt="includedImg"
              src={includedImg}
              className="section2__included__img"
            />
          </div>
          <div className="section2__apply">
            <Title>Do you want to rent a room?</Title>
            <p className="section2__apply__text">
              Please, press an Apply button to pick your dream room
            </p>
            <IconButton
              className="section2__apply__ButtonApply"
              //  onClick={this.handleOpenSignup}
              component={Link}
              to="/register"
              style={{ padding: "unset" }}
            >
              <IconRocket className={classes.ButtonIcon} />
              Apply
            </IconButton>
          </div>
        </Grid>
        <Grid className="section3">
          {/* <Background1 className="section3__background1" /> */}
          <div className="section3__vibes">
            <p className="section3__vibes__title">#cubahaus</p>
            <Title style={{ marginBottom: "50px" }}>Good vibes</Title>
            <div className="section3__vibes__post">
              <div className="section3__vibes__post__items">
                <div className={classes.commonItem}>
                  <IconBike className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Stay active</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
                <div className={classes.commonItem}>
                  <IconMountains className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Conquer mountain tops</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
                <div className={classes.commonItem}>
                  <IconHighfive className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Make friends for life</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="home1"
                src={home1}
                className="section3__vibes__post__img"
              />
            </div>
            <div
              className="section3__vibes__post"
              style={!isMobile ? { flexDirection: "row-reverse" } : null}
            >
              <div className="section3__vibes__post__items">
                <div className={classes.commonItem}>
                  <IconBicycle className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Join our road trips</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
                <div className={classes.commonItem}>
                  <IconUniversity className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Conquer mountain tops</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
                <div className={classes.commonItem}>
                  <IconBooks className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Make friends for life</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
              </div>

              <img
                alt="home2"
                src={home2}
                className="section3__vibes__post__img"
              />
            </div>
            <div className="section3__vibes__post">
              <div className="section3__vibes__post__items">
                <div className={classes.commonItem}>
                  <IconBreakfast className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Stay active</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
                <div className={classes.commonItem}>
                  <IconDebate className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Conquer mountain tops</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
                <div className={classes.commonItem}>
                  <IconGlobal className={classes.commonIcon} />
                  <div>
                    <p className={classes.commonText}>Make friends for life</p>
                    <p className={classes.commonSubText}>
                      Lorem ipsum dolor si amet, consectetur adipisicing elit,
                      sed do
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="home3"
                src={home3}
                className="section3__vibes__post__img"
              />
            </div>
          </div>
          <div className="section3__situation">
            <div className="section3__situation__body">
              <Title>A Unique Living Situation</Title>
              <MainText className="section3__situation__text">
                Go on the journey abroad you've always dreamed of. <br />
                <b>
                  Cubahaus is a unique living situation you won't get anywhere
                  else.
                </b>
                <br />
                <b>Those </b>selected to become a part of Cubahaus are
                <b> friendly, ambitious young adults </b>who display a strong
                desire to connect and collabrate with similar great minds.
              </MainText>
              <img
                alt="situationImg"
                src={width > 600 ? situationImg : situationImgM}
                className="section3__situation__body__img"
              />
            </div>
            {/* <img alt="home4" src={home4} className="section3__situation__img" /> */}
          </div>
          {/* {isMobile && (
            <img
              alt="situationImg"
              src={situationImg}
              className="section3__situation__body__img"
            />
          )} */}
        </Grid>
        <Grid className="section4">
          <div className="section4__contact">
            <Title>Apply or Contact Us</Title>
            <div ref={this.myRef1} className="section4__contact__body">
              <div className="section4__contact__body__items">
                <MainText className="section4__contact__body__text">
                  Lorem ipsum <b>dolor sit amet, consectetur</b>
                  adipisicing elit, sed do eiusmod <b>tempor incididunt </b>
                  ut labore et doloresit volptatem
                </MainText>
                <IconButton
                  className="section2__apply__ButtonApply"
                  //  onClick={this.handleOpenSignup}
                  component={Link}
                  to="/register"
                  style={{ padding: "unset" }}
                >
                  <IconRocket className={classes.ButtonIcon} />
                  Apply
                </IconButton>
              </div>
              <img
                alt="contactImg"
                src={contactImg}
                className="section4__contact__img"
              />
            </div>
          </div>
          <div className="section4__submit">
            <div className="modal">
              <p className="modal__title">Any questions?</p>
              <div className="modal__body">
                <div
                  className="modal__body__input"
                  style={{ width: "360px", height: "300px", display: "grid" }}
                >
                  <InputTextField
                    name="firstName"
                    label="First Name:"
                    type="text"
                    onChange={this.handleInputChange}
                    state={firstName}
                    margin="normal"
                  />
                  <ErrorMessage msg={firstnameError} />
                  <InputTextField
                    name="lastName"
                    label="Last Name:"
                    type="text"
                    onChange={this.handleInputChange}
                    state={lastName}
                    margin="normal"
                  />
                  <ErrorMessage msg={lastnameError} />
                  <InputTextField
                    name="email"
                    label="Email:"
                    type="text"
                    onChange={this.handleInputChange}
                    state={email}
                    margin="normal"
                  />
                  <ErrorMessage msg={emailError} />
                </div>
                <div className="modal__body__msg">
                  <p className="modal__body__label">Short Message:</p>
                  <textarea
                    name="message"
                    rows="5"
                    type="text"
                    onChange={this.handleInputChange}
                    state={message}
                    className="modal__body__message"
                    placeholder="Short Message"
                  />
                  <ErrorMessage msg={messageError} />
                </div>
              </div>
              <IconButton
                style={{ padding: "0px", borderRadius: "25px" }}
                onClick={this.send}
              >
                <Button type="gradient" size="small">
                  Send
                </Button>
              </IconButton>
            </div>
          </div>
        </Grid>
        <Drift appId="z65z3euvizdn" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

// const mapDispatchToProps = {};

const styledLanding = withStyles(useStyles)(Landing);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(styledLanding);
