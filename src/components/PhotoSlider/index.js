import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

import coummunitySVG11 from "../../assets/mainSVG/community11.svg";
import coummunitySVG12 from "../../assets/mainSVG/community12.svg";
import coummunitySVG13 from "../../assets/mainSVG/community13.svg";
import { IconLocationPin } from "../Icon";
import "./style.scss";

const styles = theme => ({
  root: {
    display: "flex !important",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  slider: {
    width: "1200px"
  },
  padSlider: {
    width: "800px"
  },
  mobileSlider: {
    width: "400px"
  }
});

class PhotoSlider extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      photoArray: [],
      photoAssetsArray: []
    };
  }
  componentDidMount() {
    this._isMounted = true;
    axios
      .get(
        `https://cdn.contentful.com/spaces/fwv88fbbv7ho/entries?access_token=fc8a87053dbaaf7e733ab143eb2f70517b22089f5fee09dcd8c4717ff05ef777&content_type=communityPhotos`
      )
      .then(res => {
        if (this._isMounted) {
          this.setState({
            photoArray: res.data.items,
            photoAssetsArray: res.data.includes.Asset
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  findImageUrl = photo => {
    let url = "";
    this.state.photoAssetsArray.map(asset => {
      if (asset.sys.id === photo.fields.image.sys.id) {
        url = asset.fields.file.url;
      }
    });
    return url;
  };

  render() {
    const { classes, isPad, isMobile } = this.props;
    let { showCount } = this.props;
    if (this.state.photoArray.length < showCount)
      showCount = this.state.photoArray.length;
    return (
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={showCount}
        // slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        className={
          showCount === 3
            ? classes.slider
            : showCount === 2
            ? classes.padSlider
            : classes.mobileSlider
        }
      >
        {this.state.photoArray.map((photo, key) => (
          <div key={key} className={classes.root}>
            <div className="photoItem">
              <img
                alt="img"
                className="photoItem__imgItems"
                src={this.findImageUrl(photo)}
              />
              <div className="photoItem__body">
                <p className="photoItem__body__title text-center">
                  {photo.fields.imageTitle}
                </p>
                <p className="photoItem__body__text">
                  {moment(photo.fields.imageDate).format("DD MMMM")}
                </p>
                <div className="photoItem__body__footer">
                  <div className="photoItem__body__footer__location">
                    <IconLocationPin className="photoItem__body__footer__icon" />
                    <p className="photoItem__body__footer__text">
                      {photo.fields.imageLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(PhotoSlider);
