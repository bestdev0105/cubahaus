import React from "react";
import { connect } from "react-redux";
import { Button, Grid, Tabs, Tab, withStyles } from "@material-ui/core";

import Slider from "react-slick";

import { roomDetailRequest } from "../../actions/room";

import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";
// import Button from "../../components/ButtonContainer";

import Common from "./Common";
import Amenities from "./Amenities";
import Kitchen from "./Kitchen";
import Description from "./Description";

import { IconHeart } from "../../components/Icon";

import {
  IconTag,
  IconGroup,
  IconWashingMachine,
  IconHome
} from "../../components/Icon";

import "./styles.scss";

const styles = theme => ({
  unSelectButton: {
    backgroundColor: "#dcdcdc",
    borderRadius: "10px",
    textAlign: "left",
    fontSize: "18px",
    textTransform: "initial",
    padding: "30px 15px 25px 20px",
    boxShadow: "rgba(247, 247, 247, 0.39) 0px 0px 40px 3px",
    color: "#ffffff",
    lineHeight: "1.21",
    width: "200px",
    justifyContent: "flex-start",
    margin: "30px 0"
  },
  selectButton: {
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "10px",
    fontSize: "18px",
    textAlign: "left",
    textTransform: "initial",
    padding: "30px 40px 25px 20px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    lineHeight: "1.21",
    color: "#ffffff",
    width: "200px",
    justifyContent: "flex-start",
    margin: "30px 0"
  },
  likeIcon: {
    width: "24px",
    height: "21px",
    fill: "#ffffff",
    marginRight: "5px"
  },
  likeButton: {
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "25px",
    fontSize: "18px",
    textTransform: "initial",
    padding: "10px 25px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    letterSpacing: "0.9px",
    color: "#ffffff"
  },
  tabsContainer: {
    justifyContent: "space-between"
  },
  root: {
    width: "23%",
    boxShadow: "0 0 47.7px 0px rgba(210, 215, 255, 0.43)",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "white"
  },
  label: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 0.9,
    textAlign: "left",
    textTransform: "none"
  },
  selected: {
    boxShadow: "0 0 78.1px 5.9px rgba(37, 60, 158, 0.24)",
    backgroundImage: "linear-gradient(357deg, #4868ff, #0000ff 99%)",
    color: "#ffffff!important"
  },
  textColor: {
    color: "#4b5688",
    opacity: 1
  }
});

const tabs = [
  {
    title: "Common spaces"
  },
  {
    title: "Amenities"
  },
  {
    title: "Kitchen"
  },
  {
    title: "Description"
  }
];
class RoomDetail extends React.Component {
  state = {
    tabIndex: 0
  };

  componentDidMount() {
    const { params } = this.props.match;
    const { id } = params;
    this.props.roomDetailRequest(id);
  }

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    const { classes, room, history } = this.props;
    if (!room) {
      return "Loading";
    }

    const { tabIndex } = this.state;

    const { common_space, noise, amenties, house, bathroom, kitchen } = room;
    const images = [...room.images];
    if (house && house.images) images.push(...house.images);
    if (bathroom && bathroom.images) images.push(...bathroom.images);
    if (kitchen && kitchen.images) images.push(...kitchen.images);

    return (
      <div className="content">
        <div className="roomdetail position-relative">
          <BackButton onClick={() => history.goBack()} />
          <div className="roomdetail__title">
            <TitleText>{room.room_name}</TitleText>
          </div>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <div className="roomdetail__info">
                <h2>{room.room_name}</h2>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <div className="roomdetail__info--item">
                      <IconTag className="icon" />
                      <p>Price: ${room.room_price}</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="roomdetail__info--item">
                      <IconWashingMachine className="icon" />
                      <div>
                        <p>House name</p>
                        <span>{house.house_name}</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="roomdetail__info--item">
                      <IconHome className="icon" />
                      <div>
                        <p>House laundary</p>
                        <span>{house.house_laundary}</span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="roomdetail__info--item">
                      <IconGroup className="icon" />
                      <div>
                        <p>Number of people</p>
                        <span>{house.house_capacity}</span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className="roomdetail__info__body">
              <div className="roomdetail__info__slider">
                <Slider dots={true}>
                  {room.images.map((image, index) => (
                    <div key={index}>
                      <img src={image.image} alt={image.image_title} />
                    </div>
                  ))}
                </Slider>
              </div>
            </Grid>
          </Grid>
          <div className="roomdetail__title">
            <TitleText>Rooms Descriptions</TitleText>
          </div>
          <div className="roomdetail__tab">
            <Tabs
              indicatorColor="primary"
              value={tabIndex}
              onChange={this.handleTabChange}
              classes={{ flexContainer: classes.tabsContainer }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.title}
                  classes={{
                    root: classes.root,
                    textColorInherit: classes.textColor,
                    label: classes.label,
                    selected: classes.selected
                  }}
                />
              ))}
            </Tabs>
          </div>
          <div className="roomdetail__description">
            {tabIndex === 0 && <Common common={common_space} />}
            {tabIndex === 1 && <Amenities amenities={amenties} />}
            {tabIndex === 2 && <Kitchen kitchen={kitchen} />}
            {tabIndex === 3 && <Description images={images} />}
            {tabIndex !== 3 && (
              <div className="roomdetail__description--extra">
                <p>Extra notes:</p>
                {noise && (
                  <span>
                    Noise: Level {noise.noise_level} of 4. (
                    {noise.noise_description})
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="roomdetail__button__container">
            <Button type="gradient" className={classes.likeButton}>
              <IconHeart alt="" className={classes.likeIcon} />
              Add to favourite
            </Button>
          </div>
          <div className="row favoriteButtonList ">
            <div className="col-4 position-relative">
              <Button type="gradient" className={classes.selectButton}>
                <IconHeart alt="" className={classes.likeIcon} />
                Go to the
                <br />
                next step
                <span className="favoriteButton">4/4</span>
              </Button>
            </div>
            <div className="col-4 position-relative">
              <Button type="gradient" className={classes.unSelectButton}>
                <IconHeart alt="" className={classes.likeIcon} />
                You must select <br />2 more rooms.
                <span className="favoriteButton">2/4</span>
              </Button>
            </div>
            <div className="col-4 position-relative">
              <Button type="gradient" className={classes.unSelectButton}>
                <IconHeart alt="" className={classes.likeIcon} />
                Please, select <br />4 rooms
                <span className="favoriteButton">0/4</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ room }) => ({
  room: room.detail
});

const mapDispatchToProps = {
  roomDetailRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RoomDetail));
