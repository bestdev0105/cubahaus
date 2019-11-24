import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  withStyles,
  List,
  ListItem,
  TextField
} from "@material-ui/core";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import {
  applicationDetailRequest,
  applicationUpdateRequest,
  universityListRequest,
  semesterListRequest
} from "../../actions/application";

import moment from "moment";
import { profilePartialUpdateRequest } from "../../actions/auth";

import NameForm from "./NameForm";
import UniversityForm from "./UniversityForm";
import BudgetForm from "./BudgetForm";
import SemesterForm from "./SemesterForm";
import ButtonContainer from "../../components/ButtonContainer";
import TitleText from "../../components/TitleText";
import rightArrow from "../../assets/SVG/right_arrow.svg";
import leftArrow from "../../assets/SVG/left_arrow.svg";
import "./style.scss";

const questions = [
  "Why do you want to live with Cubahaus and join our community?",
  "Tell us your living habits, lifestyle preferences, hobbies, and any other important details. Show us your personality!",
  "Where are you from? Where did you grow up?",
  "Try to convince us that you are clean and tidy.",
  "What are your move in/move out dates?",
  "What is your field of work/study? Where will you be working/studying in Montreal?",
  "Describe your preferred living situation. Do you want your roommates to be in a certain age range? Do you need a female-only living space? Let us know."
];

const styles = theme => ({
  buttonsWrapper: {
    padding: theme.spacing.unit * 4
  },
  button: {
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "25px",
    fontSize: "18px",
    textTransform: "initial",
    padding: "10px 25px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    letterSpacing: "0.9px",
    color: "#ffffff",
    margin: "0 5px",
    minWidth: "135px"
  }
});

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      semesters: Array(4).fill(null),
      university: "",
      min_budget: "",
      max_budget: "",
      message: "",
      page: 1,
      starting_date: "",
      end_date: ""
    };
  }

  componentDidMount() {
    this.props.applicationDetailRequest();
    this.props.semesterListRequest();
  }

  componentWillReceiveProps(nextProps) {
    const { detail, user } = nextProps;
    if (detail) {
      console.log("detail", detail);
      const {
        age,
        university,
        min_budget,
        max_budget,
        message,
        starting_date,
        end_date
      } = detail;
      this.setState({
        age,
        university: university && university.university_name,
        min_budget,
        max_budget,
        message,
        starting_date,
        end_date
      });
    }
    if (user) {
      const { first_name, last_name } = user;
      this.setState({
        firstName: first_name,
        lastName: last_name
      });
    }
  }

  // POST request debug
  handleFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === "age" ? (value ? parseInt(value) : 0) : value
    });
  };

  submitForm = () => {
    const {
      profilePartialUpdateRequest,
      applicationUpdateRequest,
      user
    } = this.props;
    const { firstName, lastName } = this.state;
    profilePartialUpdateRequest({
      username: user.username,
      first_name: firstName,
      last_name: lastName
    });
    const { semesters } = this.state;
    let dates = [];
    semesters.forEach(semester => {
      if (semester) {
        dates.push(semester.semster_starting_date);
        dates.push(semester.semster_ending_date);
      }
    });
    dates.sort((a, b) => new Date(a) - new Date(b));
    const {
      age,
      university,
      min_budget,
      max_budget,
      message,
      starting_date,
      end_date
    } = this.state;
    const payload = {
      age,
      university,
      min_budget,
      max_budget,
      message,
      starting_date: moment(starting_date).format("YYYY-MM-DD"),
      end_date: moment(end_date).format("YYYY-MM-DD")
    };
    console.log("submit Form ", payload);
    applicationUpdateRequest(payload);
  };

  nextPage = () => {
    if (this.state.page === 5) {
      this.submitForm();
      return;
    }
    this.setState({ page: this.state.page + 1 });
  };
  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  onSemesterChange = (item, index) => {
    const semesters = this.state.semesters;
    semesters[index] = item;

    this.setState({ semesters });
  };

  onChangeStartingDate = date => this.setState({ starting_date: date });
  onChangeEndDate = date => this.setState({ end_date: date });

  render() {
    const { classes, universityList, semesterList } = this.props;
    const {
      firstName,
      lastName,
      age,
      semesters: selectedSemesters,
      university,
      min_budget,
      max_budget,
      message,
      page,
      starting_date,
      end_date
    } = this.state;
    return (
      <div className="content">
        <div className="main">
          <div className="form">
            {page === 1 && (
              <NameForm
                firstName={firstName}
                lastName={lastName}
                age={age}
                handleInput={this.handleFormInput}
                onNext={this.nextPage}
              />
            )}
            {page === 2 && (
              <UniversityForm
                universityList={universityList}
                curUniversity={university}
                onSelectUniversity={university => this.setState({ university })}
                onNext={this.nextPage}
                onPrevious={this.previousPage}
              />
            )}
            {page === 3 && (
              <BudgetForm
                min={min_budget}
                max={max_budget}
                onBudgetChange={v =>
                  this.setState({ min_budget: v.min, max_budget: v.max })
                }
                onNext={this.nextPage}
                onPrevious={this.previousPage}
              />
            )}
            {page === 4 && (
              <DragDropContextProvider backend={HTML5Backend}>
                <SemesterForm
                  selectedSemesters={selectedSemesters}
                  onSemesterChange={this.onSemesterChange}
                  semesterList={semesterList}
                  onNext={this.nextPage}
                  onPrevious={this.previousPage}
                  onChangeStartingDate={this.onChangeStartingDate}
                  onChangeEndDate={this.onChangeEndDate}
                  starting_date={starting_date}
                  end_date={end_date}
                />
              </DragDropContextProvider>
            )}
            {page === 5 && (
              <div className="questions">
                <div className="questions__title">
                  <TitleText>
                    Please, write a short overview of yourself answering the
                    following questions below.
                  </TitleText>
                </div>
                <span className="questions__description">
                  It will help us to get to know you and to ensure the best
                  terms for your staying with CubaHaus
                </span>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  className="questions__body"
                >
                  <List className="questions__answers">
                    {questions.map((q, index) => (
                      <div className="questions__item" key={index}>
                        <ListItem
                          className="questions__itemFont"
                          component="h2"
                          key={index}
                        >
                          {q}
                        </ListItem>
                      </div>
                    ))}
                  </List>
                  <textarea
                    rows={5}
                    name="message"
                    type="text"
                    onChange={this.handleFormInput}
                    value={message}
                    state={message}
                    className="questions__input"
                    margin="normal"
                  />
                </Grid>
              </div>
            )}
            <div className="form__button__container">
              {this.state.page > 1 && (
                <Button className={classes.button} onClick={this.previousPage}>
                  <img
                    src={leftArrow}
                    className="form__arrow form__arrow--left"
                    alt="leftArrow"
                  />
                  <span className="form__nextButton__text form__nextButton__text--left">
                    Previous
                  </span>
                </Button>
              )}
              <Button className={classes.button} onClick={this.nextPage}>
                <span className="form__nextButton__text form__nextButton__text--right">
                  {this.state.page === 5 ? "Complete" : "Next"}
                </span>
                <img
                  src={rightArrow}
                  className="form__arrow form__arrow--right"
                  alt="rightArrow"
                />
              </Button>
            </div>
          </div>
        </div>
        {/* <div onClick={this.submitForm} className={"bottomBtn valid-button"}>
          <div className="gap" />
          Complete
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, application, university, semester }) => ({
  detail: application.detail,
  user: auth.loggedInUser,
  universityList: university.list,
  semesterList: semester.list
});

const mapDispatchToProps = {
  applicationDetailRequest,
  applicationUpdateRequest,
  universityListRequest,
  semesterListRequest,
  profilePartialUpdateRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Application));
