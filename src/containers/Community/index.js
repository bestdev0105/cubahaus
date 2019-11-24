import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  ListItemAvatar,
  Button,
  withStyles
} from "@material-ui/core";

import { communityListRequest } from "../../actions/community";
import { stateRequest } from "../../actions/state";

import ButtonContainer from "../../components/ButtonContainer";
import TitleText from "../../components/TitleText";

import "./styles.scss";

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
    margin: "0 20px",
    minWidth: "150px"
  }
});
export class Community extends Component {
  componentDidMount() {
    const { communityListRequest } = this.props;

    communityListRequest();
  }

  render() {
    const { classes, list, match } = this.props;
    return (
      <div className="content">
        <div className="community">
          <div className="community__title">
            <TitleText>Community</TitleText>
          </div>
          <Grid container className="community__list">
            {list.map(community => (
              <Grid key={community.pk} item xs={6} lg={6}>
                <ListItem
                  button
                  component={Link}
                  to={`${match.url}/${community.pk}`}
                >
                  <img
                    src={community.community_thumbnail}
                    className="community__item__image"
                  />
                  <div className="community__item__container">
                    <span className="community__item__name">
                      {community.community_name}
                    </span>
                  </div>
                </ListItem>
              </Grid>
            ))}
          </Grid>
          <div className="community__button__container">
            <Button
              className={classes.button}
              onClick={this.props.stateRequest}
            >
              <span>Complete</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ community }) => ({
  ...community
});

const mapDispatchToProps = {
  communityListRequest,
  stateRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Community));
