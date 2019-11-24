import React from "react";
import InputTextField from "../../../components/InputTextField";
// import Button from "../../../components/ButtonContainer";
import { withStyles, Button } from "@material-ui/core";

const styles = {
  updateButton: {
    backgroundImage: "linear-gradient(136deg, #f2b143 1%, #e6813b 99%)",
    borderRadius: "25px",
    fontSize: "18px",
    textTransform: "initial",
    padding: "5px 25px",
    boxShadow: "rgba(230, 129, 59, 0.5) 0px 0px 40px 1px",
    letterSpacing: "0.9px",
    color: "#ffffff"
  }
};

class UserProfileDetails extends React.Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.state = {
      first_name: data["first_name"] || "",
      last_name: data["last_name"] || ""
      // country_of_origin: data["country_of_origin"] || "",
      // university: data["university"] || "",
      // about_me: data["about_me"] || "",
      // interests: data["interests"] || ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (data) {
      this.setState({
        // username: data["username"],
        first_name: data["first_name"],
        last_name: data["last_name"]
        // country_of_origin: data["country_of_origin"] || "",
        // university: data["university"] || "",
        // about_me: data["about_me"] || "",
        // interests: data["interests"] || ""
      });
    }
  }

  // POST request debug
  handleFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = e => {
    e.preventDefault();

    const patchObj = this.state;
    this.props.handleSubmit(patchObj);
  };

  render() {
    const { classes } = this.props;
    const { first_name, last_name, country_of_origin, university } = this.state;
    return (
      <React.Fragment>
        <div className="main">
          <div className="form-content">
            <form>
              <InputTextField
                name="first_name"
                label="First Name"
                placeholder="First Name"
                type="text"
                onChange={this.handleFormInput}
                value={first_name}
                state={first_name}
                margin="normal"
                className="profileInput"
              />
              <InputTextField
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                type="text"
                onChange={this.handleFormInput}
                value={last_name}
                state={last_name}
                margin="normal"
                className="profileInput"
              />
              {/* <InputTextField
                name="country_of_origin"
                label="Country of Origin"
                placeholder="Country of Origin"
                type="text"
                onChange={this.handleFormInput}
                value={country_of_origin}
                state={country_of_origin}
                margin="normal"
                className="profileInput"
              />
              <InputTextField
                name="university"
                label="University"
                placeholder="University"
                type="text"
                onChange={this.handleFormInput}
                value={university}
                state={university}
                margin="normal"
                className="profileInput"
              /> */}
            </form>
          </div>
          {/* <ErrorMessage msg={errorMsg} /> */}
        </div>
        <div className="profile__button__container">
          <Button className={classes.updateButton} onClick={this.submitForm}>
            Update
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UserProfileDetails);
