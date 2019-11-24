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
  IconContract,
  IconChecked,
  IconView,
  IconCalendar
} from "./Icon";

const useStyles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginLeft: "20px",
    marginTop: "27px"
  },
  roomInfo: {
    width: "50%",
    display: "flex",
    flexDirection: "row"
  },
  contractInfo: {
    width: "50%",
    paddingRight: "25px"
  },
  contractTitle: {
    borderBottom: "2px solid #f8f8ff",
    flexDirection: "row",
    display: "flex",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.7px",
    color: "#596390",
    marginRight: "5px"
  },
  contractTitleT1: {
    width: "50%",
    marginLeft: "20px"
  },
  contractTitleT2: {
    width: "30%",
    textAlign: "center"
  },
  contractTitleT3: {
    width: "20%",
    textAlign: "center"
  },
  contractBody: {
    height: "300px",
    display: "flex",
    flexDirection: "row",
    marginTop: "16px",
    marginbottom: "25px"
  },
  contracts: {
    width: "50%",
    height: "100%",
    borderRight: "2px solid #f8f8ff",
    justifyContent: "spaceBetween"
  },
  status: {
    width: "30%",
    height: "100%",
    borderRight: "2px solid #f8f8ff",
    justifyContent: "spaceBetween"
  },
  views: {
    width: "20%",
    height: "100%",
    borderRight: "2px solid #f8f8ff",
    justifyContent: "spaceBetween"
  },
  contractItem: {
    height: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  commonText: {
    width: "100%",
    fontFamily: "Montserrat",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: 1.1,
    textAlign: "left",
    color: "#4c5788",
    marginTop: "10px",
    marginBottom: "5px"
  },
  commonSubText: {
    fontSize: "16px",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontStretch: "normal",
    letterSpacing: "0.8px",
    textAlign: "left",
    color: "#4c5788",
    marginTop: "10px"
  },
  commonIcon: {
    height: "50px",
    marginRight: "15px",
    verticalAlign: "top",
    fill: "#5980ff"
  },
  statusIcon: {
    height: "17px",
    marginRight: "15px",
    marginTop: "10px",
    verticalAlign: "",
    fill: "#3ef8ed"
  },
  priceCheckIcon: {
    height: "17px",
    width: "17px",
    marginRight: "15px",
    marginLeft: "26px",
    verticalAlign: "",
    fill: "#3ef8ed"
  },
  viewItemIcon: {
    height: "19px",
    marginRight: "15px",
    marginTop: "0px",
    verticalAlign: "top",
    fill: "#5980ff"
  },
  roomBody: {
    width: "60%",
    marginLeft: "20px"
  },
  roomInfoTitle: {
    fontFamily: "Montserrat",
    fontSize: "24.5px",
    fontWeight: "bold",
    letterSpacing: "1.2px",
    color: "#4c5788",
    marginBottom: "44px"
  },
  roomMedia: {
    width: "40%",
    marginTop: "20px"
  },
  viewItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px"
  },
  viewIcon: {
    width: "25px",
    height: "25px",
    marginRight: "16px"
  },
  viewPriceText: {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "1px",
    color: "rgba(76, 87, 136, 0.9)",
    margin: "0px"
  },
  viewDateText: {
    opacity: "0.9",
    fontSize: "18px",
    letterSpacing: "0.9px",
    color: "rgba(76, 87, 136, 0.9)",
    marginTop: "0px",
    marginBottom: "30px"
  },
  toRoomText: {
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "0.8px",
    color: "#3442ff",
    textDecoration: "underline"
  },
  media: {
    height: "104px",
    width: "104px",
    borderRadius: "50px"
  }
};

class FinalPageCard extends Component {
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
    const { classes, room } = this.props;
    const { isHovered } = this.state;

    return (
      <div {...this.props} className={classes.container}>
        <Grid className={classes.contractInfo}>
          <div className={classes.contractTitle}>
            <p className={classes.contractTitleT1}>Document</p>
            <p className={classes.contractTitleT2}>Status</p>
            <p className={classes.contractTitleT3}>View</p>
          </div>
          <div className={classes.contractBody}>
            <div className={classes.contracts}>
              <div className={classes.contractItem}>
                <IconContract className={classes.commonIcon} />
                <div>
                  <p className={classes.commonText}>Contract 1</p>
                  <p className={classes.commonSubText}>
                    You can view the contract
                  </p>
                </div>
              </div>
              <div className={classes.contractItem}>
                <IconContract className={classes.commonIcon} />
                <div>
                  <p className={classes.commonText}>Contract 2</p>
                  <p className={classes.commonSubText}>
                    You can view the contract
                  </p>
                </div>
              </div>
              <div className={classes.contractItem}>
                <IconContract className={classes.commonIcon} />
                <div>
                  <p className={classes.commonText}>Contract 3</p>
                  <p className={classes.commonSubText}>
                    You can view the contract
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.status}>
              <div className={classes.contractItem}>
                <IconChecked className={classes.statusIcon} />
                <p className={classes.commonSubText}>signed</p>
              </div>
              <div className={classes.contractItem}>
                <IconChecked className={classes.statusIcon} />
                <p className={classes.commonSubText}>signed</p>
              </div>
              <div className={classes.contractItem}>
                <IconChecked className={classes.statusIcon} />
                <p className={classes.commonSubText}>signed</p>
              </div>
            </div>
            <div className={classes.views}>
              <div className={classes.contractItem}>
                <IconView className={classes.statusIcon} />
              </div>
              <div className={classes.contractItem}>
                <IconView className={classes.statusIcon} />
              </div>
              <div className={classes.contractItem}>
                <IconView className={classes.statusIcon} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={classes.roomInfo}>
          <div className={classes.roomBody}>
            <p className={classes.roomInfoTitle}>Room 3</p>
            <div className={classes.viewItem}>
              <IconTag className={classes.viewItemIcon} />
              <p className={classes.viewPriceText}>$848</p>
              <IconChecked className={classes.priceCheckIcon} />
            </div>
            <div className={classes.viewItem}>
              <IconCalendar className={classes.viewItemIcon} />
              <p className={classes.viewDateText}>2018.08.31 - 2019.09.30</p>
            </div>
            <p className={classes.toRoomText}>To room page</p>
          </div>
          <div className={classes.roomMedia}>
            <CardMedia
              image={room.images[0].image}
              title={room.room_name}
              className={classes.media}
            />
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(FinalPageCard);
