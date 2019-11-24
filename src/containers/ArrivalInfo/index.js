import React, { Component } from "react";
import { connect } from "react-redux";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import { DatePicker } from "material-ui-pickers";

import { getInfoRequest, updateInfoRequest } from "../../actions/info";
import { stateUpdateRequest } from "../../actions/state";

class ArrivalInfo extends Component {
  state = {
    arrival_date: ""
  };

  componentDidMount() {
    const { getInfoRequest } = this.props;

    getInfoRequest();
  }

  componentDidUpdate(prevProps) {
    const {
      info: { loading, info }
    } = this.props;
    const { info: prevInfo } = prevProps;
    if (prevInfo.loading !== loading && !loading && info) {
      this.setState({
        arrival_date: info.arrival_date
      });
    }
  }

  handleChangeDate = date => {
    this.setState({ arrival_date: date });
  };

  onClickUpdpate = () => {
    const { arrival_date } = this.state;
    const { updateInfoRequest } = this.props;

    updateInfoRequest({ arrival_date });
  };

  render() {
    const { arrival_date } = this.state;
    return (
      <div>
        <h1>Checkout Preview</h1>
        <DatePicker
          label={"Arrival Date"}
          value={arrival_date}
          onChange={this.handleChangeDate}
          animateYearScrolling
        />
        <Button
          variant={"contained"}
          color="primary"
          size={"large"}
          onClick={this.onClickUpdate}
        >
          NEXT
          <ArrowForwardIcon fontSize={"small"} />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info
});

const mapDispatchToProps = {
  stateUpdateRequest,
  getInfoRequest,
  updateInfoRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArrivalInfo);
