import React from "react";
import { Grid } from "@material-ui/core";

import CheckIcon from "../../components/CheckIcon";
import IncludeText from "../../components/IncludeText";
import { IconChecked } from "../../components/Icon";

const Kitchen = ({ kitchen }) => {
  const {} = kitchen;
  return (
    <div className="roomdetail__description__amenities">
      <Grid container spacing={24} justify="space-evenly">
        <Grid item xs={10} md={4}>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Dishes and utensils</p>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Pots and pans</p>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Oven</p>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Stove</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Refrigerator</p>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Microwave</p>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Coffee maker</p>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Dishwasher</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kitchen;
