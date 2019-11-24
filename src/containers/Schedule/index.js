import React from "react";
import { connect } from "react-redux";
import {
  withStyles,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import moment from "moment-timezone";
import { reduce } from "lodash";

import InputTextField from "../../components/InputTextField";
import TitleText from "../../components/TitleText";
import GradientButton from "../../components/ButtonContainer";

import { slotListRequest, slotSelectRequest } from "../../actions/slot";
import { getInfoRequest, updateInfoRequest } from "../../actions/info";
import { stateRequest } from "../../actions/state";
import { SLOT_SELECT_SUCCESS } from "../../constants/slot";
import { UPDATE_INFO_SUCCESS } from "../../constants/info";

import "./styles.scss";
import SocialIcon from "../../components/SocialIcon";

const useStyles = {
  editButton: {
    margin: "0 10px",
    minWidth: "115px",
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "25px",
    fontSize: "18px",
    textTransform: "initial",
    padding: "10px 25px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    letterSpacing: "0.9px",
    color: "#ffffff"
  },
  bookButton: {
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "25px",
    fontSize: "18px",
    textTransform: "initial",
    padding: "10px 25px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    letterSpacing: "0.9px",
    color: "#ffffff"
  },
  button: {
    margin: "5px 0"
  },
  grid: {
    textAlign: "center"
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: 18,
    letterSpacing: 0.9,
    textAlign: "left"
  },
  outlinedPrimary: {
    color: "#ffffff"
  },
  outlinedSecondary: {
    color: "#525d8c"
  },
  outlineButton: {
    borderRadius: 10,
    border: "dashed 1px #f2b143",
    "&:hover": {
      border: "none"
    }
  },
  selectedButton: {
    borderRadius: 10,
    border: "none",
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    "&:hover": {
      border: "dashed 1px #f2b143"
    }
  }
};

const socialIcons = ["skype", "whatsapp", "hangout", "facebook"];

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisibleDialog: false,
      channel: "skype",
      channel_handler: "",
      selectedSlot: null,
      selectedSlotDate: "",
      selectedSlotTime: "",
      isVisibleAlert: false,
      selectedSchedule: false
    };
  }

  componentDidMount() {
    this.props.slotListRequest();
    this.props.getInfoRequest();
  }

  componentDidUpdate(prevProps) {
    const {
      info: { loading, info, status },
      slot
    } = this.props;
    const { info: prevInfo, slot: prevSlot } = prevProps;
    if (prevInfo.loading != loading && !loading && info) {
      this.setState({
        channel_handler: info.channel_handler || ""
      });
    }

    if (
      prevSlot.status !== slot.status &&
      slot.status === SLOT_SELECT_SUCCESS &&
      slot.result.selected
    ) {
      this.setState({ isVisibleDialog: true });
    }

    if (status !== prevInfo.status && status === UPDATE_INFO_SUCCESS) {
      this.props.stateRequest();
    }
  }

  getSlotsByDate(slots) {
    const tz = moment.tz.guess();
    const modifiedSlots = slots.map(slot => {
      const mt = moment.tz(slot.time_slots, tz);
      return {
        id: slot.pk,
        selected: slot.selected,
        date: mt.format("ddd, YYYY-MM-DD"),
        time: mt.format("hh:mm a")
      };
    });

    return reduce(
      modifiedSlots,
      (result, value) => {
        (result[value.date] || (result[value.date] = [])).push({
          pk: value.id,
          time: value.time,
          selected: value.selected
        });
        return result;
      },
      {}
    );
  }

  handleSlot = (id, date, time) => {
    this.setState(prevState => ({
      selectedSlot: prevState.selectedSlot === id ? null : id,
      selectedSlotDate: date,
      selectedSlotTime: time
    }));
  };

  handleUpdate = () => {
    const { updateInfoRequest } = this.props;
    updateInfoRequest({ channel_handler: this.state.channel_handler });

    this.setState({ isVisibleDialog: false });
  };

  handleFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleComplete = () => {
    const { selectedSlot: slot_id } = this.state;
    const { slotSelectRequest } = this.props;

    slotSelectRequest(slot_id);
  };

  handleCompleteEdit = () => {
    this.setState({
      selectedSchedule: false
    });
  };

  handleCompleteCheck = () => {
    this.setState({
      isVisibleAlert: false
    });
    const { channel_handler, selectedSlot: slot_id } = this.state;
    if (channel_handler === "") {
      this.setState({
        isVisibleAlert: true
      });
    }
    if (channel_handler !== "" && slot_id !== null) {
      this.setState({
        selectedSchedule: true
      });
    }
  };

  onClickChannel = value => {
    this.setState({
      channel: value
    });
  };

  render() {
    const {
      isVisibleDialog,
      channel_handler,
      selectedSlot,
      channel,
      isVisibleAlert,
      selectedSchedule,
      selectedSlotTime,
      selectedSlotDate
    } = this.state;
    const { classes, slot } = this.props;

    if (!slot.list || slot.loading) {
      return "Loading";
    }

    const formattedSlots = this.getSlotsByDate(slot.list);
    console.log("slot.list", formattedSlots);

    return (
      <div className="content">
        <div className="schedule">
          <div className="schedule__title">
            <TitleText>Schedule</TitleText>
          </div>
          <div className="schedule__content">
            <div className="schedule__content__title" />
            {!selectedSchedule ? (
              <div className="schedule__content__body">
                <Grid
                  container
                  spacing={24}
                  spacing={0}
                  className="schedule__content__body__dateList"
                >
                  {Object.keys(formattedSlots).map(key => (
                    <Grid item key={key} xs={6} md={3} className={classes.grid}>
                      <Grid container justify="center">
                        <div className="schedule__content__date">
                          <h3>{key}</h3>
                        </div>
                        <div className="schedule__content__time">
                          {formattedSlots[key].map(slot => (
                            <Button
                              key={slot.pk}
                              variant="outlined"
                              size="large"
                              classes={{
                                label: classes.text,
                                outlinedPrimary: classes.outlinedPrimary,
                                outlinedSecondary: classes.outlinedSecondary,
                                outlined:
                                  selectedSlot === slot.pk
                                    ? classes.selectedButton
                                    : classes.outlineButton
                              }}
                              className={classes.button}
                              color={
                                selectedSlot === slot.pk
                                  ? "primary"
                                  : "secondary"
                              }
                              onClick={() =>
                                this.handleSlot(slot.pk, key, slot.time)
                              }
                            >
                              {slot.time}
                            </Button>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                <div>
                  <h2>Select instant messenger for communication</h2>
                  {socialIcons.map(type => (
                    <SocialIcon
                      key={type}
                      type={type}
                      active={channel === type}
                      onClick={this.onClickChannel}
                    />
                  ))}
                </div>
                <Grid container spacing={24}>
                  <Grid item xs={12} md={4} lg={4}>
                    <h2>Уour contacts</h2>
                    <InputTextField
                      name="channel_handler"
                      type="text"
                      placeholder="Your Contact Info"
                      onChange={this.handleFormInput}
                      value={channel_handler}
                      state={channel_handler}
                      margin="small"
                    />
                    <p
                      className="contactsAlert"
                      style={
                        isVisibleAlert
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      Please, write your contacts
                    </p>
                  </Grid>
                </Grid>
                <div className="schedule__content__button__container">
                  <Button
                    className={classes.bookButton}
                    onClick={this.handleCompleteCheck}
                  >
                    Book this time!
                  </Button>
                </div>
              </div>
            ) : (
              <div className="schedule__content__body">
                <h3 className="selected__title">Schedule</h3>
                <Grid container spacing={24} spacing={0}>
                  <div className="selected__slot">
                    <h3 className="selected__slot__text">{selectedSlotDate}</h3>
                    <Button
                      key={slot.pk}
                      variant="outlined"
                      size="large"
                      classes={{
                        label: classes.text,
                        outlinedPrimary: classes.outlinedPrimary,
                        outlinedSecondary: classes.outlinedSecondary,
                        outlined: classes.selectedButton
                      }}
                      className={classes.button}
                      color={"primary"}
                    >
                      {selectedSlotTime}
                    </Button>
                  </div>
                  <div className="selected__infoSlot">
                    <div className="selected__infoSlot__item">
                      <h3 className="selected__infoSlot__text">
                        Messenger for communication:
                      </h3>
                      <p className="selected__slot__infoText">{channel}</p>
                    </div>
                    <div className="selected__infoSlot__item">
                      <h3 className="selected__infoSlot__text">
                        your contacts:
                      </h3>
                      <p className="selected__slot__infoText">
                        {channel_handler}
                      </p>
                    </div>
                  </div>
                  <div className="selected__buttons">
                    <Button
                      className={classes.editButton}
                      onClick={this.handleCompleteEdit}
                    >
                      Edit
                    </Button>
                    <Button
                      className={classes.editButton}
                      onClick={this.handleComplete}
                    >
                      Complete
                    </Button>
                  </div>
                </Grid>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ slot, info }) => ({
  slot,
  info
});

const mapDispatchToProps = {
  slotListRequest,
  slotSelectRequest,
  stateRequest,
  getInfoRequest,
  updateInfoRequest
};

export default withStyles(useStyles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Schedule)
);
