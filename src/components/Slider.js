import React from "react";
import ReactSlider from "react-slick";

import { IconLeft, IconRight } from "./Icon";

const Slider = ({ children }) => {
  return (
    <ReactSlider
      dots
      infinite
      prevArrow={<IconLeft className="icon" />}
      nextArrow={<IconRight className="icon" />}
    >
      {children}
    </ReactSlider>
  );
};

export default Slider;
