import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Button from "../../components/ButtonContainer";
import errorImg from "../../assets/landing/404.svg";
import "./styles.scss";
class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    if (auth.error) {
      this.setState({});
    }
  }

  render() {
    return (
      <div className="blank">
        <img src={errorImg} className="blank__img" />
        <div className="blank__body">
          <div className="blank__body__title">Page not found</div>
          <div className="blank__body__text">
            The link you clicked may be broken or the page may have been removed
          </div>

          <div className="blank__buttons">
            <IconButton
              style={{ padding: "0px", borderRadius: "25px" }}
              component={Link}
              to="/"
            >
              <Button type="gradient" size="small">
                Homepage
              </Button>
            </IconButton>
            <IconButton
              className="blank__buttons__LineButton"
              component={Link}
              to={{ pathname: "/", state: { contactUs: true } }}
            >
              Contact Us
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blank);
