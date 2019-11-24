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

import {
  IconHome,
  IconTag,
  IconGroup,
  IconWashingMachine,
  IconStairs,
  IconBed,
  IconKitchen,
  IconBathtub,
  IconSofa,
  IconFacade,
  IconBalcony,
  IconFence
} from "./Icon";

const useStyles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex"
  },
  roomInfoC: {
    padding: "35px",
    marginTop: "18px",
    borderRight: "1px solid #f6f6fc"
  },
  roomInfo: {
    width: "50%"
  },
  media: {
    height: "287px",
    width: "100%",
    borderTopLeftRadius: "10px"
  },
  icon: {
    height: 35,
    width: 35,
    marginRight: 18,
    verticalAlign: "middle",
    fill: "#e6813b"
  },
  text: {
    width: "50%",
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.4,
    lineHeight: 3.75,
    textAlign: "left",
    color: "#4c5788",
    marginTop: "30px"
  },
  textRoomName: {
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: 23.5,
    fontWeight: "bold",
    letterSpacing: 1.94,
    textAlign: "left",
    color: "#4c5788",
    borderLeft: "4px solid #f2802d",
    paddingLeft: "17px"
  },
  smallText: {
    fontSize: "18px",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    lineHeight: 2.53,
    letterSpacing: "0.5px",
    textAlign: "left",
    color: "#4c5788"
  },
  subText: {
    height: "100px",
    fontSize: "14.5px",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontStretch: "normal",
    lineHeight: 1,
    letterSpacing: "0.4px",
    textAlign: "left",
    color: "#4c5788"
  },
  commonInfo: {
    width: "50%",
    paddingLeft: "60px",
    paddingTop: "35px",
    alignItems: "baseline"
  },
  textCommonName: {
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: 23.5,
    fontWeight: "bold",
    letterSpacing: 1.94,
    textAlign: "left",
    color: "#4c5788",
    paddingLeft: "50px",
    margin: "0px"
  },
  commonItem: {
    flexDirection: "row",
    display: "flex",
    width: "100%"
  },
  commonIcon: {
    height: "44px",
    width: "44px",
    marginRight: "25px",
    verticalAlign: "top",
    fill: "#e6813b"
  },
  commonText: {
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "left",
    color: "#4c5788",
    marginTop: "0px",
    marginBottom: "5px"
  },
  commonSubText: {
    fontSize: "14.5px",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontStretch: "normal",
    letterSpacing: "0.4px",
    textAlign: "left",
    color: "#4c5788",
    margin: "0px"
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
      isHovered: !this.state.isHovered
    });
  };

  render() {
    const { classes, room, onClickRoom, roomSelectRequest } = this.props;
    const { isHovered } = this.state;
    console.log(room);
    return (
      <div {...this.props} className={classes.container}>
        <Grid className={classes.roomInfo}>
          <CardMedia
            image={room.images[0].image}
            title={room.room_name}
            className={classes.media}
            onClick={onClickRoom}
          />
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            className={classes.roomInfoC}
          >
            <Typography
              inline
              gutterBottom={false}
              variant="h5"
              component="h2"
              className={classes.textRoomName}
            >
              {room.room_name}
            </Typography>
            <Typography
              inline
              gutterBottom={false}
              variant="h5"
              component="h2"
              className={classes.text}
            >
              <IconTag className={classes.icon} />
              Price ${room.room_price}
            </Typography>
            <Typography
              inline
              gutterBottom={false}
              variant="h5"
              component="h2"
              className={classes.text}
            >
              <IconWashingMachine className={classes.icon} />
              {room.room_name}
            </Typography>
            <Typography
              inline
              gutterBottom={false}
              variant="h5"
              component="h2"
              className={classes.text}
            >
              <IconHome className={classes.icon} />
              INAPARTMENT
            </Typography>
            <Typography
              inline
              gutterBottom={false}
              variant="h5"
              component="h2"
              className={classes.text}
            >
              <IconGroup className={classes.icon} />6
            </Typography>
            <div>
              <p className={classes.smallText}>Extra notes:</p>
              <p className={classes.subText}>
                Noise: Level 1 0f 4. (Lowest disturbance)
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.commonInfo}>
          <p className={classes.textCommonName}>Common spaces</p>
          <div className={classes.commonItem}>
            <IconStairs className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Floor</p>
              <p className={classes.commonSubText}>2nd floor</p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconBed className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Bed size</p>
              <p className={classes.commonSubText}>Double/Full</p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconKitchen className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Kitchen</p>
              <p className={classes.commonSubText}>
                Quantity 1:Shared with 3 people
              </p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconBathtub className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Bathroom</p>
              <p className={classes.commonSubText}>
                Quantity 1: Shared with 3 people
              </p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconSofa className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Living room</p>
              <p className={classes.commonSubText}>
                uantity 1: Shared with 3 people
              </p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconFacade className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Terrace</p>
              <p className={classes.commonSubText}>
                Quantity 1: Shared with neighbours.
              </p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconBalcony className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Balcony</p>
              <p className={classes.commonSubText}>
                Quantity 1: Shared with 3 people
              </p>
            </div>
          </div>
          <div className={classes.commonItem}>
            <IconFence className={classes.commonIcon} />
            <div>
              <p className={classes.commonText}>Backyard</p>
              <p className={classes.commonSubText}>
                Quantity 1: Shared with 5 people
              </p>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(RoomCheckout);
