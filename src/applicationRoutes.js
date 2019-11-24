import React from "react";
import { connect } from "react-redux";
import {
  Stepper,
  Step,
  StepButton,
  StepConnector,
  StepLabel,
  withStyles
} from "@material-ui/core";
import { PrivateRoute } from "./routes";
import routeConfig from "./config/routeConfig";
import { stateRequest, setSelectedState } from "./actions/state";
import { applicationDetailRequest } from "./actions/application";
import { statusList, finalStatus } from "./constants/user_status";
import tick from "./assets/SVG/tick.svg";
const styles = theme => ({
  root: {
    padding: 0,
    marginTop: 60,
    height: 87,
    backgroundColor: "#ffffff",
    boxShadow: "0 0 27px 8.1px rgba(210, 215, 255, 0.21)",
    borderRadius: 50
  },
  stepperStepRoot: {
    marginTop: 30
  },
  stepperButtonRoot: {
    padding: "0px 16px"
  },
  stepperLabel: {
    fontSize: 14.5,
    letterSpacing: 0.7,
    fontFamily: "Montserrat"
  },
  completedStepperLabel: {
    fontWeight: "600!important",
    color: "#596390!important"
  },
  activeStepperLabel: {
    fontWeight: "600!important",
    color: "#596390!important"
  },
  disabledStepperLabel: {
    fontWeight: "300!important",
    color: "#9ba2c9!important"
  },
  connectorActive: {
    "& $connectorLine": {
      opacity: 0.48
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      opacity: 0.48
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      opacity: 0.16
    }
  },
  connectorLine: {
    borderColor: "#3349ff"
  },
  connectorRoot: {
    left: "calc(-50% + 45px)",
    right: "calc(50% + 45px)"
  },
  stepperTouchRipple: {
    display: "none"
  }
});

class ApplicationRoutes extends React.Component {
  componentDidMount() {
    this.props.stateRequest();
    this.props.applicationDetailRequest();
  }

  componentDidUpdate(prevProps) {
    const { match, history } = this.props;

    const prevSelectedIndex = statusList.indexOf(prevProps.selectedStatus);
    const newSelectedIndex = statusList.indexOf(this.props.selectedStatus);
    if (prevSelectedIndex !== newSelectedIndex && newSelectedIndex >= 0) {
      history.push(`${match.url}/${routeConfig[newSelectedIndex].path}`);
    }
  }

  renderCustomStepperIcon = (isCompleted, disabled, active, index) => {
    return (
      <div className={`stepperIconLargeCircle ${active && "active"}`}>
        <div className={`stepperIconMediumCircle ${active && "active"}`}>
          <div
            className={`stepperIconWrapper ${disabled ? "disable" : "alive"}`}
          >
            {isCompleted && <img src={tick} className="tick" alt="tick" />}
            {!isCompleted && (
              <span className={`text ${active ? "active" : "disable"}`}>
                {index + 1}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  handleStep = index => {
    this.props.setSelectedState(statusList[index]);
  };

  render() {
    const {
      isLoggedIn,
      match,
      curStatus,
      selectedStatus,
      classes
    } = this.props;
    const lastCompleteIndex = statusList.indexOf(curStatus);
    const activeStep = statusList.indexOf(selectedStatus);
    console.log("status", lastCompleteIndex, activeStep, finalStatus);
    const connector = (
      <StepConnector
        disabled={true}
        classes={{
          root: classes.connectorRoot,
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );
    return (
      <div>
        <div className="content">
          <Stepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            className={classes.root}
            connector={connector}
          >
            {statusList.map((label, index) => {
              const isCompleted =
                index === activeStep
                  ? false
                  : index <= lastCompleteIndex
                  ? true
                  : false;
              {
                /* const disabled =
              (lastCompleteIndex >= finalStatus && lastCompleteIndex > index) ||
              index > lastCompleteIndex; */
              }
              const disabled = false;
              {
                /* (lastCompleteIndex >= finalStatus && lastCompleteIndex > index) ||
              index > lastCompleteIndex; */
              }
              const active = index === activeStep;
              return (
                <Step
                  key={index}
                  completed={isCompleted}
                  classes={{ root: classes.stepperStepRoot }}
                  disabled={disabled}
                >
                  <StepButton
                    onClick={() => this.handleStep(index)}
                    icon={this.renderCustomStepperIcon(
                      isCompleted,
                      disabled,
                      active,
                      index
                    )}
                    classes={{
                      root: classes.stepperButtonRoot,
                      touchRipple: classes.stepperTouchRipple
                    }}
                  >
                    <StepLabel
                      alternativeLabel
                      classes={{
                        label: classes.stepperLabel,
                        completed: classes.completedStepperLabel,
                        active: classes.activeStepperLabel,
                        disabled: classes.disabledStepperLabel
                      }}
                    >
                      {label}
                    </StepLabel>
                  </StepButton>
                  >
                </Step>
              );
            })}
          </Stepper>
        </div>

        {routeConfig.map((route, index) => (
          <PrivateRoute
            key={index}
            exact={true}
            path={`${match.url}/${route.path}`}
            component={route.component}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, state }) => ({
  isLoggedIn: auth.token !== null,
  curStatus: state.userStatus,
  selectedStatus: state.selectedStatus
});

const mapDispatchToProps = {
  stateRequest,
  setSelectedState,
  applicationDetailRequest
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ApplicationRoutes)
);
