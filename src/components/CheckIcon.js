import React from "react";
import { IconChecked, IconUnchecked } from "./Icon";

const CheckIcon = ({ checked }) =>
  checked ? (
    <IconChecked className="icon checked" />
  ) : (
    <IconUnchecked className="icon unchecked" />
  );

  export default CheckIcon