import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Slider from "react-slick";
import "./style.scss";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px"
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
    width: "310px",
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

class LandingSlider extends Component {
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
    const isMobile = false;
    return (
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        className={classes.slider}
        rows={2}
        slidesPerRow={2}
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
            src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_thumb,e_improve,q_auto,w_600/v1559401830/sample_room_images/Image3.jpg"
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
            src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401852/sample_room_images/Image1.jpg"
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
            src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401963/sample_room_images/Image6.jpg"
          />
        </div>

        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401823/sample_room_images/Image4.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401811/sample_room_images/Image2.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401798/sample_room_images/Image5.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_thumb,e_improve,q_auto,w_600/v1559401830/sample_room_images/Image3.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401852/sample_room_images/Image1.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401963/sample_room_images/Image6.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401823/sample_room_images/Image4.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401811/sample_room_images/Image2.jpg"
            />
          </div>
        )}
        {!isMobile && (
          <div className={classes.root}>
            <img
              alt="img"
              className={isPad ? classes.padImgItem : classes.imgItem}
              src="https://res.cloudinary.com/dfdulgqpf/image/upload/c_scale,e_improve,q_auto,w_600/v1559401798/sample_room_images/Image5.jpg"
            />
          </div>
        )}
      </Slider>
    );
  }
}

export default withStyles(styles)(LandingSlider);
