import React, { Component } from "react";
import { connect } from "react-redux";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TitleText from "../../components/TitleText";
import ButtonContainer from "../../components/ButtonContainer";
import FinalPageCard from "../../components/FinalPageCard";
// import RoomCheckoutDetail from "../../components/RoomCheckoutDetail";

// import { getCheckoutPreviewRequest } from "../../actions/checkout";
import DateDropDown from "./DateDropDown";
import { stateRequest } from "../../actions/state";
import { status } from "../../constants/user_status";
import "./Final.style.scss";
var monthData = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 }
];
class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      month: 1,
      year: 2019
    };
  }
  componentDidMount() {
    {
      this.state.year % 4 === 0
        ? (monthData[1].days = 29)
        : (monthData[1].days = 28);
    }
  }

  contactSend = () => {
    // !this.state.checkoutStep
    //   ? this.setState({
    //       checkoutStep: true
    //     })
    //   : stateRequest(status.roomPreviewed);
  };

  render() {
    const { day, month, year } = this.state;
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
      <div className="finalPage">
        <div className="finalPage__title">
          <TitleText>Final Page</TitleText>
        </div>

        <span className="finalPage__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </span>

        <Grid className="finalPage__cardGrid">
          <FinalPageCard room={rooms[0]} />
        </Grid>

        <Grid className="finalPage__contactCard">
          <div className="finalPage__text">
            If you have questions or
            <br /> suggestions you can contact us
          </div>
          <textarea
            rows={5}
            name="message"
            type="text"
            placeholder="Write a comment"
            //  onChange={this.handleFormInput}
            //  value={message}
            //  state={message}
            className="finalPage__input"
            margin="normal"
          />
          <div className="finalPage__timeText">
            specify the time and date of arrival
          </div>
          <div className="finalPage__timeSelect">
            <div>
              <p className="finalPage__selectTitleText">Day</p>
              <DateDropDown
                data={monthData}
                day={day}
                month={month}
                year={year}
                type="day"
              />
            </div>
            <div>
              <p className="finalPage__selectTitleText">Month</p>
              <DateDropDown
                data={monthData}
                day={day}
                month={month}
                year={year}
                type="month"
              />
            </div>
            <div>
              <p className="finalPage__selectTitleText">Year</p>
              <DateDropDown
                data={monthData}
                day={day}
                month={month}
                year={year}
                type="year"
              />
            </div>
            <div>
              <p className="finalPage__selectTitleText">Hours</p>
              <DateDropDown
                data={monthData}
                day={day}
                month={month}
                year={year}
                type="hours"
              />
            </div>
            <div>
              <p className="finalPage__selectTitleText">Minutes</p>
              <DateDropDown
                data={monthData}
                day={day}
                month={month}
                year={year}
                type="minutes"
              />
            </div>
            <div className="sendBtn">
              <ButtonContainer
                type="gradient"
                size="small"
                onClick={this.contactSend}
              >
                <span>Send</span>
              </ButtonContainer>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // preview: state.checkout.preview
});

const mapDispatchToProps = {
  // getCheckoutPreviewRequest,
  stateRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Final);
