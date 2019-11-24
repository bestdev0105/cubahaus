import React from "react";
import { Grid } from "@material-ui/core";

import CheckIcon from "../../components/CheckIcon";
import IncludeText from "../../components/IncludeText";
import { IconChecked } from "../../components/Icon";

const Amenities = ({ amenities }) => {
  const {
    ac,
    bedLinen,
    dryer,
    electricity,
    heaitng: heating,
    hot_water,
    pillows,
    wifi
  } = amenities;
  return (
    <div className="roomdetail__description__amenities">
      <Grid container spacing={24} justify="space-evenly">
        <Grid item xs={10} md={4}>
          <div className="roomdetail__description__amenities--item">
            <IconChecked className="icon checked" />
            <div>
              <p>Rooms</p>
              <span>Fully furnished</span>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={pillows} />
            <div>
              <p>Pillows</p>
              <IncludeText included={pillows} />
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={bedLinen} />
            <div>
              <p>Bed linen</p>
              <IncludeText included={bedLinen} />
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={bedLinen} />
            <div>
              <p>Washer</p>
              <span>In the building (2$/use)</span>
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={dryer} />
            <div>
              <p>Dryer</p>
              <IncludeText included={dryer} />
            </div>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={electricity} />
            <div>
              <p>Electricity</p>
              <IncludeText included={electricity} />
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={heating} />
            <div>
              <p>Heating</p>
              <IncludeText included={heating} />
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={ac} />
            <div>
              <p>Air conditioned</p>
              <IncludeText included={ac} />
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={hot_water} />
            <div>
              <p>Hot water</p>
              <IncludeText included={hot_water} />
            </div>
          </div>
          <div className="roomdetail__description__amenities--item">
            <CheckIcon checked={wifi} />
            <div>
              <p>WiFi</p>
              <IncludeText included={wifi} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Amenities;
