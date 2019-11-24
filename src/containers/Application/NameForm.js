import React from "react";
import PropTypes from "prop-types";

import InputTextField from "../../components/InputTextField";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TitleText from "../../components/TitleText";
import "./style.scss";
const styles = theme => ({
  buttonsWrapper: {
    padding: theme.spacing.unit * 4
  }
});

function NameForm({ classes, firstName, lastName, age, handleInput }) {
  console.log(firstName);
  return (
    <div className="name">
      <div className="name__title">
        <TitleText>What is your name</TitleText>
      </div>
      <form autoComplete="off">
        <Grid
          className="name__form"
          container
          direction="row"
          justify="space-around"
        >
          <Grid item xs={3} className="name__formgrid">
            <InputTextField
              name="firstName"
              label="First name"
              placeholder="First name"
              type="text"
              onChange={handleInput}
              value={firstName}
              state={firstName}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3} className="name__formgrid">
            <InputTextField
              name="lastName"
              label="Last name"
              placeholder="Last name"
              type="text"
              onChange={handleInput}
              value={lastName}
              state={lastName}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3} className="name__formgrid">
            <InputTextField
              name="age"
              label="Age"
              type="number"
              onChange={handleInput}
              value={age}
              state={age}
              margin="normal"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

NameForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  handleInput: PropTypes.func
};

export default withStyles(styles)(NameForm);
