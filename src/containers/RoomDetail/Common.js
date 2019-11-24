import React from "react";
import { Grid } from "@material-ui/core";

import { ReactComponent as IconBed } from "../../assets/SVG/bed.svg";
import { ReactComponent as IconFloor } from "../../assets/SVG/stairs.svg";
import { ReactComponent as IconKitchen } from "../../assets/SVG/kitchen.svg";
import { ReactComponent as IconBath } from "../../assets/SVG/bathtub.svg";
import { ReactComponent as IconSofa } from "../../assets/SVG/sofa.svg";
import { ReactComponent as IconFacade } from "../../assets/SVG/facade.svg";
import { ReactComponent as IconBalcony } from "../../assets/SVG/balcony.svg";
import { ReactComponent as IconFence } from "../../assets/SVG/fence.svg";
// backyard: true;
// backyard_will_be_shared_with: 1;
// balcony: false;
// balcony_will_be_shared_with: 1;
// floor: "2";
// id: 1;
// livingroom_will_be_shared_with: 1;
// teracce: false;
// teracce_will_be_shared_with: 1;

const Common = ({ common, noise }) => {
  return (
    <div className="roomdetail__description__common">
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <div className="roomdetail__description__common--item">
            <IconFloor className="icon"/>
            <div>
              <p>Floor</p>
              <span>{common.floor}</span>
            </div>
          </div>
          <div className="roomdetail__description__common--item">
            <IconBed className="icon"/>
            <div>
              <p>Bed size</p>
              <span>Double/Full</span>
            </div>
          </div>
          <div className="roomdetail__description__common--item">
            <IconKitchen className="icon" />
            <div>
              <p>Kitchen</p>
              <span>Quantity 1: Shared with 3 people</span>
            </div>
          </div>
          <div className="roomdetail__description__common--item">
            <IconBath className="icon" />
            <div>
              <p>Bathroom</p>
              <span>Quantity 1: Shared with 3 people</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="roomdetail__description__common--item">
            <IconSofa className="icon" />
            <div>
              <p>Living room</p>
              <span>
                Quantity 1: Shared with {common.livingroom_will_be_shared_with}{" "}
                people
              </span>
            </div>
          </div>
          <div className="roomdetail__description__common--item">
            <IconFacade className="icon" />
            <div>
              <p>Terrace</p>
              <span>Quantity 1: Shared with {common.teracce_will_be_shared_with} people</span>
            </div>
          </div>
          <div className="roomdetail__description__common--item">
            <IconBalcony className="icon" />
            <div>
              <p>Balcony</p>
              <span>
                Quantity 1: Shared with {common.balcony_will_be_shared_with}{" "}
                people
              </span>
            </div>
          </div>
          <div className="roomdetail__description__common--item">
            <IconFence className="icon" />
            <div>
              <p>Backyard</p>
              <span>
                Quantity 1: Shared with {common.backyard_will_be_shared_with}{" "}
                people
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Common;
