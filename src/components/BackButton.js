import React from "react";
import leftArrow from "../assets/SVG/left_arrow_orange.svg";
import { Button, withStyles } from "@material-ui/core";

const styles = theme => ({
  text: {
    fontFamily: "Montserrat",
    fontSize: 15.5,
    fontWeight: 500,
    lineHeight: 2.94,
    letterSpacing: 0.4,
    textAlign: "left",
    color: "#596390",
    textTransform: "none"
  },
  icon: {
    width: 17,
    marginRight: 13
  }
});

const BackButton = ({ classes, onClick }) => {
  return (
    <Button
      disableRipple={true}
      disableFocusRipple={true}
      onClick={onClick}
      variant="text"
      classes={{ text: classes.text }}
    >
      <img src={leftArrow} className={classes.icon} alt="" />
      Back
    </Button>
  );
};

export default withStyles(styles)(BackButton);
