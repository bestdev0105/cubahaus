import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, withStyles } from "@material-ui/core";

import Lease from "../Lease";
import PaymentOption from "../PaymentOption";
import TitleText from "../../components/TitleText";
import Button from "../../components/ButtonContainer";

import { stateRequest } from "../../actions/state";

import "./styles.scss";

const styles = theme => ({
  root: {
    fontFamily: "Montserrat",
    fontSize: 18,
    letterSpacing: 0.9,
    textAlign: "left",
    color: "#596390",
    textTransform: "none"
  },
  selected: {
    fontWeight: 600
  }
});

class Contract extends Component {
  state = {
    tabIndex: 0
  };

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    const { tabIndex } = this.state;
    const { classes } = this.props;

    return (
      <div className="contract">
        <div className="contract__title">
          <TitleText>Contract</TitleText>
        </div>
        <Tabs
          centered
          value={tabIndex}
          onChange={this.handleTabChange}
          indicatorColor="primary"
        >
          <Tab
            label="Your Leases"
            classes={{ label: classes.root, selected: classes.selected }}
          />
          <Tab
            label="Payment Option"
            classes={{ label: classes.root, selected: classes.selected }}
          />
        </Tabs>
        {tabIndex === 0 && <Lease />}
        {tabIndex === 1 && <PaymentOption />}
        <div className="button__container">
          <Button
            type="gradient"
            size="small"
            onClick={this.props.stateRequest}
          >
            <span>Complete</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { stateRequest }
)(withStyles(styles)(Contract));
