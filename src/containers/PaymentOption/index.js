import React, { Component } from "react";

import {
  IconWireTransfer,
  IconPaypalOutlined,
  IconCash
} from "../../components/Icon";

import "./style.scss";

class PaymentOption extends Component {
  render() {
    return (
      <div className="paymentOption">
        <div className="paymentOption__description">
          <span>Info about Payment Options</span>
        </div>
        <div>
          <div className="paymentOption__item">
            <IconWireTransfer className="paymentOption__item__icon"/>
            <div className="paymentOption__item__content">
              <p>Wire Transfer</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </span>
            </div>
          </div>
          <div className="paymentOption__item">
            <IconPaypalOutlined className="paymentOption__item__icon"/>
            <div className="paymentOption__item__content">
              <p>PayPal</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </span>
            </div>
          </div>
          <div className="paymentOption__item">
            <IconCash className="paymentOption__item__icon"/>
            <div className="paymentOption__item__content">
              <p>Cash</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentOption;
