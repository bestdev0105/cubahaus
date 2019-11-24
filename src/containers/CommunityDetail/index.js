import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Mapbox from "mapbox";
import ReactMapboxGL, { Marker, Layer, Feature } from "react-mapbox-gl";

import RoomCard from "../../components/RoomCard";
import BackButton from "../../components/BackButton";
import TitleText from "../../components/TitleText";

import { communityDetailRequest } from "../../actions/community";
import { roomSelectRequest } from "../../actions/room";

import accessToken from "../../config/map";

import leftArrow from "../../assets/SVG/left_arrow_orange.svg";
import rightArrow from "../../assets/SVG/right_arrow_orange.svg";
import { IconWalk, IconTransport } from "../../components/Icon";

import "./styles.scss";
// import Slider from "../../components/Slider";
import Slider from "react-slick";

const mapbox = new Mapbox(accessToken);
const Map = ReactMapboxGL({ accessToken });

export class CommunityDetail extends Component {
  state = {
    walkingDuration: 0,
    walkingDistance: 0,
    walkingDirections: [],
    trafficDuration: 0,
    trafficDistance: 0,
    trafficDirections: []
  };

  componentDidMount() {
    const { communityDetailRequest, match } = this.props;
    communityDetailRequest(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { detail, application } = this.props;
    const { detail: prevDetail } = prevProps;

    if (detail !== prevDetail && detail) {
      const { university_lat, university_lon } = application.university;
      const { location_lat, location_lon } = detail.location;
      mapbox
        .getDirections(
          [
            { longitude: location_lon, latitude: location_lat },
            { longitude: university_lon, latitude: university_lat }
          ],
          {
            profile: "walking",
            instructions: "html",
            alternatives: false,
            geometry: "geojson"
          }
        )
        .then(results => {
          const {
            entity: { routes }
          } = results;
          this.setState({
            walkingDuration: routes[0].duration,
            walkingDistance: routes[0].distance,
            walkingDirections: routes[0].geometry.coordinates
          });
        });
      mapbox
        .getDirections(
          [
            { longitude: location_lon, latitude: location_lat },
            { longitude: university_lon, latitude: university_lat }
          ],
          {
            profile: "driving-traffic",
            instructions: "html",
            alternatives: false,
            geometry: "geojson"
          }
        )
        .then(results => {
          const {
            entity: { routes }
          } = results;
          this.setState({
            trafficDuration: routes[0].duration,
            trafficDistance: routes[0].distance,
            trafficDirections: routes[0].geometry.coordinates
          });
        });
    }
  }

  render() {
    const {
      loading,
      detail,
      roomSelectRequest,
      history,
      application
    } = this.props;
    if (loading || detail === null) {
      return null;
    }
    const { location, manager, images, rooms } = detail;
    const { location_lat: latitude, location_lon: longitude } = location;
    const {
      university: { university_lat, university_lon }
    } = application;
    const { walkingDuration, walkingDirections, trafficDuration } = this.state;

    return (
      <div className="">
        <div className="community__detail content">
          <BackButton onClick={() => history.goBack()} />
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <div className="community__detail__manager">
                {manager.map(item => (
                  <h2 key={item.id}>{item.full_name}</h2>
                ))}
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </span>
                <div className="community__detail__manager__bg1" />
              </div>
            </Grid>
            <Grid item xs={12} md={6} className="community__detail__body">
              <div className="community__detail__slider">
                <Slider dots={true}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image.image} alt={image.image_title} />
                    </div>
                  ))}
                </Slider>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="community__detail__title">
                <TitleText>Rooms For Community</TitleText>
              </div>
              <div className="room">
                <Slider
                  dots={true}
                  infinite={true}
                  centerMode={true}
                  prevArrow={<img src={leftArrow} alt="" />}
                  nextArrow={<img src={rightArrow} alt="" />}
                  slidesToShow={rooms.length <= 2 ? rooms.length : 2}
                  slidesToScroll={1}
                  onSwipe={e => this.setState({ swiping: false })}
                >
                  {rooms &&
                    rooms.map(room => (
                      <div key={room.pk} className="roomCard">
                        <RoomCard
                          room={room}
                          onClickRoom={() =>
                            history.push(`/application/rooms/${room.pk}`)
                          }
                          roomSelectRequest={roomSelectRequest}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
              <div className="room__mobile">
                <Slider
                  dots={true}
                  infinite={true}
                  centerMode={true}
                  prevArrow={<img src={leftArrow} alt="" />}
                  nextArrow={<img src={rightArrow} alt="" />}
                  slidesToShow={1}
                  slidesToScroll={1}
                  onSwipe={e => this.setState({ swiping: false })}
                >
                  {rooms &&
                    rooms.map(room => (
                      <div key={room.pk} className="roomCard">
                        <RoomCard
                          room={room}
                          onClickRoom={() =>
                            history.push(`/application/rooms/${room.pk}`)
                          }
                          roomSelectRequest={roomSelectRequest}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid item xs={12}>
          <div className="community__detail__title">
            <span className="mapTitleText">Map</span>
          </div>
          <div className="map">
            <div className="map__distance">
              <div className="map__distance__container">
                <div>
                  <IconWalk className="icon" />
                  <span>
                    <span className="bold">
                      {Math.floor(walkingDuration / 60)} min
                    </span>
                    By Walk
                  </span>
                </div>
                <div>
                  <IconTransport className="icon" />
                  <span>
                    <span className="bold">
                      {Math.floor(trafficDuration / 60)} min
                    </span>
                    By Public
                    <br />
                    Transport
                  </span>
                </div>
              </div>
            </div>
            <Map
              style={"mapbox://styles/mapbox/light-v9"}
              zoom={[15]}
              center={[longitude, latitude]}
              containerStyle={{
                width: "100%",
                height: "581px"
              }}
            >
              <Marker
                coordinates={[longitude, latitude]}
                className={"map--marker"}
              />
              <Marker
                coordinates={[university_lon, university_lat]}
                className={"map--marker"}
              />
              <Layer
                type="line"
                layout={{ "line-cap": "round", "line-join": "round" }}
                paint={{ "line-color": "#4790E5", "line-width": 5 }}
              >
                <Feature coordinates={walkingDirections} />
              </Layer>
            </Map>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ community, application }) => ({
  ...community,
  application: application.detail
});

const mapDispatchToProps = {
  communityDetailRequest,
  roomSelectRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityDetail);
