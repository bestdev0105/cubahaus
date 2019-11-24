import React from "react";

import {
  IconSkype,
  IconWhatsapp,
  IconGoogleHangout,
  IconFacebook
} from "../Icon";

import "./styles.scss";

const getLabel = type => {
  switch (type) {
    case "skype":
      return "Skype";
    case "whatsapp":
      return "Whatsapp";
    case "hangout":
      return "GoogleHangouts";
    case "facebook":
      return "Facebook";
    default:
      return "Skype";
  }
};

const getIcon = (type, active) => {
  switch (type) {
    case "skype":
      return <IconSkype className="icon" />;
    case "whatsapp":
      return <IconWhatsapp className="icon" />;
    case "hangout":
      return <IconGoogleHangout className="icon" />;
    case "facebook":
      return <IconFacebook className="icon" />;
    default:
      return <IconSkype className="icon" />;
  }
};

const SocialIcon = ({ type, active, withLabel, onClick }) => {
  const cn = `icon__container ${active ? "icon--active" : "icon--disable"}`;
  return (
    <div className={cn} onClick={() => onClick(type)}>
      <div>{getIcon(type, active)}</div>
      {withLabel && <span>{getLabel(type)}</span>}
    </div>
  );
};

SocialIcon.defaultProps = {
  type: "skype",
  active: false,
  withLabel: true
};

export default SocialIcon;
