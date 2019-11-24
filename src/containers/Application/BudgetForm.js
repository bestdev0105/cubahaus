import React from "react";

import Grid from "@material-ui/core/Grid";
import InputRange from "react-input-range";
import { withStyles } from "@material-ui/core";
import TitleText from "../../components/TitleText";

const styles = theme => ({
  buttonsWrapper: {
    padding: theme.spacing.unit * 4
  },
  minMaxLabel: {
    fontSize: "15.5px",
    fontWeight: 300,
    lineHeight: 2.94,
    letterSpacing: "0.8px",
    textAlign: "left",
    color: "#9ba2c9"
  }
});

const BudgetForm = ({ classes, min, max, onBudgetChange }) => {
  return (
    <div className="budget">
      <div className="budget__title">
        <TitleText>Budget</TitleText>
      </div>

      <Grid container direction="row" justify="center">
        <Grid className="budgetspin" item xs={6}>
          <InputRange
            step={10}
            formatLabel={value => `$${value}`}
            draggableTrack
            minValue={0}
            maxValue={2000}
            value={{ min, max }}
            onChange={onBudgetChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(BudgetForm);
