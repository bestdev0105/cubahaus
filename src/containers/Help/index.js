import React from "react";
import { IconButton } from "@material-ui/core";
import { NavigateBeforeRounded } from "@material-ui/icons";

export default class Help extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <IconButton aria-label="Return back" onClick={() => history.goBack()}>
          <NavigateBeforeRounded color={"secondary"} />
          Back
        </IconButton>
        <h1>Help</h1>
      </>
    )
  }
}