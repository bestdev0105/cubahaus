import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Grid } from "@material-ui/core";
import TitleText from "../../components/TitleText";
import ButtonContainer from "../../components/ButtonContainer";
import RoomCheckout from "../../components/RoomCheckout";
import RoomCheckoutDetail from "../../components/RoomCheckoutDetail";

import { getCheckoutPreviewRequest } from "../../actions/checkout";
import { stateRequest } from "../../actions/state";
import { status } from "../../constants/user_status";
import "./styles.scss";
export class CheckoutPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutStep: false
    };
  }
  componentDidMount() {
    const { getCheckoutPreviewRequest } = this.props;
    this.setState({
      checkoutStep: false
    });
    getCheckoutPreviewRequest();
  }

  checkoutNext = () => {
    !this.state.checkoutStep
      ? this.setState({
          checkoutStep: true
        })
      : stateRequest(status.roomPreviewed);
  };

  render() {
    const { checkoutStep } = this.state;
    const { preview, stateRequest, detail } = this.props;
    // const { rooms } = detail;
    const rooms = [
      {
        pk: 3,
        room_name: "Room 4",
        room_price: 550,
        selected: true,
        images: [
          {
            id: 4,
            image_title: "kitchen1",
            image:
              "https://cubahaus-api.s3.amazonaws.com/media/6_of_6_2018_-_04_-_18_-_02-24-56_DSC_0336_-_Version_2.jpg",
            timestamp: "2019-03-18T06:31:34.274390Z"
          }
        ]
      }
    ];
    return (
      <div className="checkoutPreview">
        <div className="checkoutPreview__title">
          <TitleText>Checkout Preview</TitleText>
        </div>

        {/* {preview && (
          <section>
            <p>Period: {preview.get_renting_period}</p>
            <p>Price: ${preview.get_renting_price}</p>
          </section>
        )} */}
        {!checkoutStep ? (
          <div>
            <span className="checkoutPreview__description">
              Please select 1 room from favorites
            </span>
            <Grid className="checkoutPreview__cardGrid">
              {rooms &&
                rooms.map(room => (
                  <div key={room.pk} className="">
                    <RoomCheckout
                      room={room}
                      //  onClickRoom={() => history.push(`/application/rooms/${room.pk}`) }
                      //  roomSelectRequest={roomSelectRequest}
                    />
                  </div>
                ))}
            </Grid>
          </div>
        ) : (
          <Grid className="preview2">
            <RoomCheckoutDetail room={rooms[0]} />
          </Grid>
        )}
        <ButtonContainer
          type="gradient"
          size="small"
          onClick={this.checkoutNext}
        >
          <span>NEXT</span>

          <ArrowForwardIcon fontSize={"small"} />
        </ButtonContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  preview: state.checkout.preview
});

const mapDispatchToProps = {
  getCheckoutPreviewRequest,
  stateRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPreview);
