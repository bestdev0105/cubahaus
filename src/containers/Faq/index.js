import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

import FaqItem from "../../components/FaqItem";
import Signup from "../../components/Signup";

import faqImg from "../../assets/landing/14.svg";
import contactImg from "../../assets/landing/17.svg";

import { IconRocket } from "../../components/Icon";

import "./faq.scss";

const FETCH_FAQ = "FETCH_FAQ";
const API_BASE_URL = "https://cdn.contentful.com";
const API_SPACE_ID = "fwv88fbbv7ho";
const API_TOKEN =
  "fc8a87053dbaaf7e733ab143eb2f70517b22089f5fee09dcd8c4717ff05ef777";

const Title = styled.div`
  font-family: Montserrat;
  font-size: 60px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 1.2px;
  color: #4c5788;
  margin-bottom: 30px;
`;

const MainText = styled.div`
  font-family: Montserrat;
  font-size: 18.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.97;
  text-align: left;
  letter-spacing: 0.5px;
  margin-top: 42px;
  margin-bottom 61px;
  color: rgba(39, 52, 110, 0.73);
`;

class Faq extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      signUpShow: false,
      faqArray: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get(
        `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=faq`
      )
      .then(res => {
        if (this._isMounted) {
          this.setState({
            faqArray: res.data.items
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    if (auth.error) {
      this.setState({});
    }
  }
  handleOpenSignup = e => {
    this.setState({
      signUpShow: true
    });
  };

  onClose = e => {
    this.setState({ signInShow: false, signUpShow: false });
  };

  render() {
    const { history, classes } = this.props;
    const { faqArray } = this.state;

    return (
      <div className="faqContainer">
        <Signup open={this.state.signUpShow} onClose={this.onClose} />
        <div className="faq">
          <div style={{}}>
            <Title className="faq__title">
              Frequently
              <br />
              Asked Questions
            </Title>
            <img src={faqImg} className="faq__img" />
            {faqArray.length !== 0 &&
              faqArray.map((faq, key) => (
                <FaqItem
                  key={key}
                  question={faq.fields.question}
                  answer={faq.fields.answer}
                />
              ))}
          </div>
        </div>
        <div className="faqsection4__contact">
          <Title className="faqsection4__contact__title">Apply Us</Title>
          <div className="faqsection4__contact__body">
            <div className="faqsection4__contact__body__items">
              <MainText className="faqsection4__contact__body__text">
                Lorem ipsum <b>dolor sit amet, consectetur</b>
                <br /> adipisicing elit, sed do eiusmod{" "}
                <b>
                  tempor
                  <br />
                  incididunt{" "}
                </b>
                ut labore et doloresit volptatem
              </MainText>

              <IconButton
                className="section2__apply__ButtonApply"
                //  onClick={this.handleOpenSignup}
                component={Link}
                to="/register"
                style={{ padding: "unset" }}
              >
                <IconRocket className="ButtonIcon" />
                Apply
              </IconButton>
            </div>
            <img src={contactImg} className="faqsection4__contact__img" />
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
)(Faq);
