import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

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
    width: "1000px"
  },
  mobileSlider: {
    width: "100%"
  }
});

class VideoSlider extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      videoArray: [],
      videoAssetsArray: []
    };
  }
  componentDidMount() {
    this._isMounted = true;
    axios
      .get(
        `https://cdn.contentful.com/spaces/fwv88fbbv7ho/entries?access_token=fc8a87053dbaaf7e733ab143eb2f70517b22089f5fee09dcd8c4717ff05ef777&content_type=communityVideos`
      )
      .then(res => {
        if (this._isMounted) {
          this.setState({
            videoArray: res.data.items,
            videoAssetsArray: res.data.includes.Asset
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  findVideoUrl = video => {
    let url = "";
    this.state.videoAssetsArray.map(asset => {
      if (asset.sys.id === video.fields.video.sys.id) {
        url = asset.fields.file.url;
      }
    });
    return url;
  };

  findImageUrl = video => {
    let url = "";
    this.state.videoAssetsArray.map(asset => {
      if (asset.sys.id === video.fields.videoIcon.sys.id) {
        url = asset.fields.file.url;
      }
    });
    return url;
  };

  render() {
    const { classes, isPad, isMobile, width } = this.props;
    let { showCount } = 1;
    if (this.state.videoArray.length < showCount)
      showCount = this.state.videoArray.length;
    return (
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        arrows={width > 1000 ? true : false}
        autoplaySpeed={6000}
        className={width > 1000 ? classes.padSlider : classes.mobileSlider}
      >
        {this.state.videoArray.map((video, key) => (
          <div key={key} className={classes.root}>
            <div className="videoItem">
              <ReactPlayer
                //  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                url={this.findVideoUrl(video)}
                playing
                muted
                loop
                className="videoItem__video"
              />
              <div className="videoItem__body">
                <div className="videoItem__body__header">
                  <img
                    alt="img"
                    className="videoItem__icon"
                    src={this.findImageUrl(video)}
                  />
                  <div>
                    <p className="videoItem__body__title text-center">
                      {video.fields.videoTitle}
                    </p>
                    <p className="videoItem__body__date">
                      {moment(video.fields.videoDate).format("DD MMMM")}
                    </p>
                  </div>
                </div>
                <p className="videoItem__body__text">
                  {video.fields.videoDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
        {this.state.videoArray.map((video, key) => (
          <div key={key} className={classes.root}>
            <div className="videoItem">
              <ReactPlayer
                //  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                url={this.findVideoUrl(video)}
                playing
                muted
                loop
                className="videoItem__video"
              />
              <div className="videoItem__body">
                <div className="videoItem__body__header">
                  <img
                    alt="img"
                    className="videoItem__icon"
                    src={this.findImageUrl(video)}
                  />
                  <div>
                    <p className="videoItem__body__title text-center">
                      {video.fields.videoTitle}
                    </p>
                    <p className="videoItem__body__date">
                      {moment(video.fields.videoDate).format("DD MMMM")}
                    </p>
                  </div>
                </div>
                <p className="videoItem__body__text">
                  {video.fields.videoDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
        {this.state.videoArray.map((video, key) => (
          <div key={key} className={classes.root}>
            <div className="videoItem">
              <ReactPlayer
                //  url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                url={this.findVideoUrl(video)}
                playing
                muted
                loop
                className="videoItem__video"
              />
              <div className="videoItem__body">
                <div className="videoItem__body__header">
                  <img
                    alt="img"
                    className="videoItem__icon"
                    src={this.findImageUrl(video)}
                  />
                  <div>
                    <p className="videoItem__body__title text-center">
                      {video.fields.videoTitle}
                    </p>
                    <p className="videoItem__body__date">
                      {moment(video.fields.videoDate).format("DD MMMM")}
                    </p>
                  </div>
                </div>
                <p className="videoItem__body__text">
                  {video.fields.videoDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(VideoSlider);
