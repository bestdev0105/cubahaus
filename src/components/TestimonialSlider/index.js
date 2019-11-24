import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Slider from "react-slick";
import { IconMcgilluniversitylogo } from "../../components/Icon";

import "./style.scss";

const styles = theme => ({
  root: {
    flexGrow: 1
    // width: "500px"
    // padding: "20px"
  },
  slider: {
    width: "560px"
  }
});

const MainText = styled.div`
  font-family: Montserrat;
  font-size: 18.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.57;
  text-align: left;
  letter-spacing: 0.5px;
  color: #4c5788;
  max-height: 300px;
  overflow-y: hidden;
`;

const Name = styled.div`
  font-family: Montserrat;
  font-size: 36.5px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.9px;
  text-align: left;
  color: #27346e;
`;

const University = styled.div`
  font-family: Montserrat;
  font-size: 18.5px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.5px;
  text-align: left;
  color: #27346e;
  margin: 0 auto;
`;

class TestmonialSlider extends Component {
  render() {
    const { classes, isPad, isMobile } = this.props;

    return (
      <Slider
        dots={true}
        arrows={isPad ? false : true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        className={classes.slider}
      >
        {this.props.testimonialsArray.map((item, key) => (
          <div
            key={key}
            className={classes.root}
            style={!isPad ? { padding: "20px" } : null}
          >
            <div className="personInfo">
              <img
                alt="img"
                className="personInfo__imgItem"
                src={require("../../assets/landing/mary.png")}
              />
              <div>
                <Name>{item.fields.reviewerName}</Name>
                <div className="personInfo">
                  {/* <IconMcgilluniversitylogo className="personInfo__logo" /> */}
                  <University>{item.fields.reviewerUniversity}</University>
                </div>
              </div>
            </div>
            <MainText className="personText">{item.fields.review}</MainText>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(TestmonialSlider);
