import React from "react";

export default function ButtonContainer({ size, type, children, onClick }) {
  let width,
    height,
    border,
    backgroundImage,
    borderRadius,
    boxShadow,
    innerBackgroundImage;
  switch (size) {
    case "large":
      width = 369;
      height = 73;
      borderRadius = 36.5;
      break;
    case "small":
      width = 135;
      height = 50;
      borderRadius = 25;
      break;
    case "back":
      width = 200;
      height = 50;
      borderRadius = 25;
      break;
    default:
      width = "fit-content";
      height = 50;
      borderRadius = 25;
      break;
  }
  switch (type) {
    case "gradient":
      border = "none";
      backgroundImage = "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)";
      boxShadow = "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px";
      innerBackgroundImage = "transparent";
      break;
    case "default":
      backgroundImage = "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)";
      boxShadow = "none";
      innerBackgroundImage = "white";
      break;
  }
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundImage,
        boxShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
        // margin: "0px 12px"
        //        padding: "0 20px"
      }}
      onClick={onClick}
    >
      <div
        style={{
          height: height - 2,
          borderRadius,
          background: innerBackgroundImage,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontFamily: "Comfortaa",
          fontSize: "18px",
          fontWeight: "bold",
          letterSpacing: "0.9px",
          textAlign: "left",
          color: "#ffffff"
        }}
      >
        {children}
      </div>
    </div>
  );
}
