import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { IconHome, IconTag, IconCalendar } from "./Icon";

const useStyles = {
  container: {
    justifyContent: "center",
    display: "flex",
    height: "500px",
    paddingTop: "60px"
  },
  card: {
    width: 288,
    height: "383px",
    borderRadius: 20,
    boxShadow: "0 0 27px 8.1px rgba(210, 215, 255, 0.21)",
    backgroundColor: "#ffffff"
  },
  cardHover: {
    width: 288,
    height: "383px",
    borderRadius: 20,
    boxShadow: "0 0 53px 4px rgba(37, 60, 158, 0.31)",
    background: "linear-gradient(357deg, #4868ff, #0000ff 99%)"
  },
  media: {
    height: "277px",
    clipPath:
      "polygon(100% 0, 100% 87%, 97% 89%,93% 90%, 84% 89%, 67% 83%, 50% 80%, 28% 80%, 19% 81%,12% 83%, 0 88%, 0 0)"
  },
  mediaHover: {
    height: "277px",
    clipPath:
      "polygon(100% 0, 100% 87%, 97% 89%,93% 90%, 84% 89%, 67% 83%, 50% 80%, 28% 80%, 19% 81%,12% 83%, 0 88%, 0 0)"
  },
  icon: {
    width: 24,
    marginRight: 10,
    verticalAlign: "bottom",
    color: "#0000ff",
    fill: "#0000ff"
  },
  iconHover: {
    width: 24,
    marginRight: 10,
    verticalAlign: "bottom",
    color: "#0000ff",
    fill: "#ffffff"
  },
  textRoomName: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.9,
    textAlign: "left",
    color: "#666f98"
  },
  textRoomNameHover: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.9,
    textAlign: "left",
    color: "#ffffff"
  },
  textPrice: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.8,
    textAlign: "left",
    color: "rgba(102, 111, 152, 0.9)"
  },
  textPriceHover: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.8,
    textAlign: "left",
    color: "rgba(255, 255, 255, 0.9)"
  },
  addItems: {
    marginTop: "25px"
  }
};

class RoomCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleHover = () => {
    this.setState({
      // isHovered: !this.state.isHovered
    });
  };

  render() {
    const {
      classes,
      room,
      onClickRoom,
      roomSelectRequest,
      selected
    } = this.props;
    // const { isHovered } = this.state;
    console.log(room);
    return (
      <div {...this.props} className={classes.container}>
        <Card
          //   onClick={this.handleHover}
          className={selected === room.pk ? classes.cardHover : classes.card}
          raised={true}
        >
          {/* <CardActionArea>
            <CardHeader title={room.room_name} />
          </CardActionArea> */}
          <CardMedia
            image={room.images[0].image}
            title={room.room_name}
            className={
              selected === room.pk ? classes.mediaHover : classes.media
            }
            //    onClick={onClickRoom}
          />

          <CardContent>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Typography
                inline
                gutterBottom={false}
                variant="h5"
                component="h2"
                className={
                  selected === room.pk
                    ? classes.textRoomNameHover
                    : classes.textRoomName
                }
              >
                {room.room_name}
              </Typography>
              <Typography
                inline
                gutterBottom={false}
                variant="h5"
                component="h2"
                className={
                  selected === room.pk
                    ? classes.textPriceHover
                    : classes.textPrice
                }
              >
                <IconTag
                  className={
                    selected === room.pk ? classes.iconHover : classes.icon
                  }
                />
                ${room.room_price}
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.addItems}
            >
              <Typography
                inline
                gutterBottom={false}
                variant="h5"
                component="h2"
                className={
                  selected === room.pk
                    ? classes.textPriceHover
                    : classes.textPrice
                }
              >
                <IconCalendar
                  className={
                    selected === room.pk ? classes.iconHover : classes.icon
                  }
                />
                2018.08.31 - 2019.09.30
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(RoomCheckout);
