import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
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

class LandingSlider extends Component {
  findImageUrl = blog => {
    let url = "";
    this.props.blogAssetsArray.map(asset => {
      if (asset.sys.id === blog.fields.blogImage.sys.id) {
        url = asset.fields.file.url;
      }
    });
    return url;
  };

  render() {
    const { classes, isPad, isMobile } = this.props;
    let { showCount } = this.props;
    if (this.props.blogArray.length < showCount)
      showCount = this.props.blogArray.length;

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
        {this.props.blogArray.map((blog, key) => (
          <div key={key} className={classes.root}>
            <div className="blogItem">
              <img
                alt="img"
                className="blogItem__imgItems"
                src={this.findImageUrl(blog)}
              />
              {/* src={coummunitySVG11} */}
              <div className="blogItem__body">
                <p className="blogItem__body__title">{blog.fields.blogTitle}</p>
                <p className="blogItem__body__text">
                  {blog.fields.blogSynposis}
                </p>
                <div className="blogItem__body__footer">
                  <Link
                    to={{
                      pathname: `/blog/${blog.fields.blogTitle}`,
                      state: { blog: blog, blogArray: this.props.blogArray }
                    }}
                  >
                    <div className="blogItem__body__footer__readmore">
                      Read more
                    </div>
                  </Link>
                  <div className="blogItem__body__footer__location">
                    <IconLocationPin className="blogItem__body__footer__icon" />
                    <p className="blogItem__body__footer__text">
                      {blog.fields.blogLocation}
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

export default withStyles(styles)(LandingSlider);
