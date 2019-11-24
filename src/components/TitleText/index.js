import React, { Component } from "react"
import "./style.scss";

export default class TitleText extends Component {
  render() {
    return (
      <span className="titleText">
        {this.props.children}
      </span>
    )
  }
}
