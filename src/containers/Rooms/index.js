import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { withStyles } from "@material-ui/core";
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { roomListRequest, roomSelectRequest } from "../../actions/room";
import { stateUpdateRequest } from "../../actions/state";

import "./room.scss";

const useStyles = {
  card: {
    margin: "15px",
    maxWidth: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // ratio 16:9
  }
};

const sliderSetting = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "40px",
  speed: 500
};

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swiping: false
    };
  }

  componentDidMount() {
    this.props.roomListRequest();
  }

  render() {
    const { classes, rooms, match } = this.props;
    var desc = "Please select your favourite rooms";

    if (rooms && rooms.length === 0) {
      desc = "No Rooms. Coming soon";
    }

    return (
      <div className="room">
        <h1>Rooms For You</h1>
        <h2 className="description">{desc}</h2>
        <Slider
          {...sliderSetting}
          onSwipe={e => this.setState({ swiping: false })}
        >
          {rooms &&
            rooms.map(room => (
              <div key={room.pk}>
                <Card className={classes.card} raised={true}>
                  <CardActionArea
                    onClick={this.props.onClickRoom}
                  >
                    <CardHeader title={room.room_name} />
                  </CardActionArea>
                  <CardMedia
                    image={room.images[0].image}
                    title={room.room_name}
                    className={classes.media}
                  />
                  <CardActions disableActionSpacing>
                    <IconButton
                      aria-label="Add to favorites"
                      onClick={() => this.props.roomSelectRequest(room.pk)}
                    >
                      <FavoriteIcon
                        color={room.selected ? "secondary" : "disabled"}
                      />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            ))}
        </Slider>
        <div
          onClick={() => this.props.stateUpdateRequest()}
          className={"bottomBtn valid-button"}
        >
          <div className="gap" />
          Complete
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ room }) => ({
  rooms: room.list
});

const mapDispatchToProps = {
  roomListRequest,
  roomSelectRequest,
  stateUpdateRequest
};

export default withStyles(useStyles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Rooms)
);
