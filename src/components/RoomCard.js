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

import { IconHome, IconTag, IconGroup, IconFullSize } from "./Icon";

const useStyles = {
  container: {
    justifyContent: "center",
    display: "flex",
    height: "490px"
  },
  card: {
    width: 300,
    height: "400px",
    marginTop: "35px",
    borderRadius: 10,
    boxShadow: "0 0 27px 8.1px rgba(210, 215, 255, 0.21)",
    cursor: "pointer"
  },
  cardHover: {
    width: 333,
    height: "470px",
    marginTop: "0px",
    borderRadius: 20,
    boxShadow: "0 0 78.1px 5.9x rgba(37, 60, 158, 0.24)",
    background: "linear-gradient(27deg, #5980ff 1%, #0000ff 99%)",
    cursor: "pointer"
  },
  media: {
    height: "277px"
  },
  mediaHover: {
    height: "300px",
    clipPath: "circle(95% at 49% 0)"
  },
  icon: {
    width: 24,
    marginRight: 10,
    verticalAlign: "bottom",
    color: "#0000ff",
    fill: "#0000ff"
  },
  iconHover: {
    width: 26,
    marginRight: 10,
    verticalAlign: "bottom",
    color: "#0000ff",
    fill: "#ffffff"
  },
  roomIconHover: {
    display: "none"
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
    fontSize: 25,
    fontWeight: 600,
    letterSpacing: 1.3,
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
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 1,
    textAlign: "left",
    color: "rgba(255, 255, 255, 0.9)"
  },
  textSize: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.8,
    textAlign: "left",
    marginLeft: "41px",
    color: "rgba(102, 111, 152, 0.9)"
  },
  textSizeHover: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.8,
    textAlign: "left",
    marginLeft: "41px",
    color: "rgba(255, 255, 255, 0.9)"
  },
  addItems: {
    marginTop: "25px"
  },
  checkFav: {
    justifyContent: "flex-end",
    paddingRight: "22px",
    position: "absolute"
  },
  favButton: {
    marginLeft: "210px",
    marginTop: "-20px",
    boxShadow: "0 0 73.5px 5.5px rgba(37,60, 158, 0.3)",
    background: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)"
  },
  favButtonHover: {
    display: "none"
  },
  addFavHover: {
    border: "solid 1px #f8f8f8",
    marginTop: "-17px",
    width: 220,
    height: 47,
    borderRadius: 23.5,
    marginLeft: 100
  },
  addFav: {
    display: "none"
  },
  addFavText: {
    fontFamily: "Montserrat",
    fontSize: "14.5px !important",
    fontWeight: 500,
    letterSpacing: 0.8,
    textAlign: "left",
    marginLeft: "5px",
    color: "#f8f8f8"
  }
};

class RoomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  };
  // const RoomCard = ({ classes, room, onClickRoom, roomSelectRequest }) => {
  render() {
    const { classes, room, onClickRoom, roomSelectRequest } = this.props;
    const { isHovered } = this.state;
    return (
      <div className={classes.container}>
        <Card
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHover}
          className={isHovered ? classes.cardHover : classes.card}
          raised={true}
        >
          {/* <CardActionArea>
            <CardHeader title={room.room_name} />
          </CardActionArea> */}
          <CardMedia
            image={room.images[0].image}
            title={room.room_name}
            className={isHovered ? classes.mediaHover : classes.media}
            onClick={onClickRoom}
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
                  isHovered ? classes.textRoomNameHover : classes.textRoomName
                }
              >
                <IconHome
                  className={isHovered ? classes.roomIconHover : classes.icon}
                />
                {room.room_name}
              </Typography>
              <Typography
                inline
                gutterBottom={false}
                variant="h5"
                component="h2"
                className={
                  isHovered ? classes.textPriceHover : classes.textPrice
                }
              >
                <IconTag
                  className={isHovered ? classes.iconHover : classes.icon}
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
                  isHovered ? classes.textPriceHover : classes.textPrice
                }
              >
                <IconGroup
                  className={isHovered ? classes.iconHover : classes.icon}
                />
                6
              </Typography>
              <Typography
                inline
                gutterBottom={false}
                variant="h5"
                component="h2"
                className={isHovered ? classes.textSizeHover : classes.textSize}
              >
                <IconFullSize
                  className={isHovered ? classes.iconHover : classes.icon}
                />
                50 m2
              </Typography>
            </Grid>
          </CardContent>

          <CardActions disableActionSpacing className={classes.checkFav}>
            <IconButton
              className={isHovered ? classes.favButtonHover : classes.favButton}
              aria-label="Add to favorites"
              onClick={() => roomSelectRequest(room.pk)}
            >
              <FavoriteIcon color={room.selected ? "secondary" : "inherit"} />
            </IconButton>
            <IconButton
              className={isHovered ? classes.addFavHover : classes.addFav}
              aria-label="Add to favorites"
              onClick={() => roomSelectRequest(room.pk)}
            >
              <FavoriteIcon color={room.selected ? "secondary" : "inherit"} />

              <Typography
                inline
                gutterBottom={false}
                variant="h5"
                component="h2"
                className={classes.addFavText}
              >
                {room.selected ? "Remove to favorites" : "Add to favorites"}
              </Typography>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(RoomCard);
