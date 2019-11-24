import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Slider from "react-slick";
import "./style.scss";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px",
    display: "flex !important",
    justifyContent: "center"
    // width: "500px"
  },
  slider: {
    maxWidth: "670px",
    width: "100%",
    height: "100%"
  },
  mobileSlider: {
    width: "389px"
  },
  imgItem: {
    width: "95%",
    height: "223px",
    borderRadius: "20px"
  },
  padImgItem: {
    // width: "95%",
    // height: "180px",
    width: "327px",
    height: "223px",
    borderRadius: "20px"
  },
  mobileImgItem: {
    // width: "100%",
    // height: "200px",
    width: "327px",
    height: "223px",
    borderRadius: "20px"
  }
});

class LandingMobileSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpShow: false,
      height: props.height
    };

    window.addEventListener("resize", this.updateScreenWidth);
  }

  componentWillMount() {
    this.updateScreenHeight();
  }

  updateScreenHeight = () => {
    this.setState({
      height: window.innerHeight
    });
  };

  render() {
    const { classes, width } = this.props;
    const isPad = false;
    const isMobile = true;
    return (
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        className={classes.mobileSlider}
        rows={1}
        slidesPerRow={1}
        centerPadding="60px"
        arrows={false}
      >
        <div className={classes.root}>
          <img
            alt="img"
            className={
              isPad
                ? classes.padImgItem
                : isMobile
                ? classes.mobileImgItem
                : classes.imgItem
            }
            src={require("../../assets/rooms/Image1.jpg")}
          />
        </div>
        <div className={classes.root}>
          <img
            alt="img"
            className={
              isPad
                ? classes.padImgItem
                : isMobile
                ? classes.mobileImgItem
                : classes.imgItem
            }
            src={require("../../assets/rooms/Image2.jpg")}
          />
        </div>
        <div className={classes.root}>
          <img
            alt="img"
            className={
              isPad
                ? classes.padImgItem
                : isMobile
                ? classes.mobileImgItem
                : classes.imgItem
            }
            src={require("../../assets/rooms/Image3.jpg")}
          />
        </div>

        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/Image4.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/Image5.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/Image6.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/2.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/4.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/5.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/2.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/4.jpg")}
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src={require("../../assets/rooms/5.jpg")}
            />
          </div>
        )}
      </Slider>
    );
  }
}

export default withStyles(styles)(LandingMobileSlider);
