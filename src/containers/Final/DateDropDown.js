import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import rightArrow from "../../assets/SVG/right_arrow.svg";
import { IconHome, IconTag, IconGroup } from "../../components/Icon";
import { isEmpty } from "lodash";
import "./Final.style.scss";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 160,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflowY: "auto",
    maxHeight: 130
  },
  listItem: {
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "3px"
  }
});

class DateDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      selectedIndex: 0,
      realData: []
    };
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index, flag: false });
    console.log(index);
  };

  clickedDropDown = () => {
    this.setState({
      flag: !this.state.flag
    });
  };

  componentDidMount() {
    if (this.props.type === "day") {
      for (var i = 1; i <= this.props.data[this.props.month - 1].days; i++) {
        this.state.realData.push(i);
      }
      this.setState({
        selectedIndex: this.props.day
      });
    }
    if (this.props.type === "month") {
      this.props.data.map(month => {
        this.state.realData.push(month.name);
      });
      this.setState({
        selectedIndex: this.props.month - 1
      });
    }
    if (this.props.type === "year") {
      for (i = 2000; i <= 2099; i++) {
        this.state.realData.push(i);
      }
      this.setState({
        selectedIndex: this.props.month - 1
      });
    }
    if (this.props.type === "hours") {
      for (i = 0; i <= 23; i++) {
        this.state.realData.push(i);
      }
      this.setState({
        selectedIndex: this.props.month - 1
      });
    }
    if (this.props.type === "minutes") {
      for (i = 0; i <= 59; i++) {
        this.state.realData.push(i);
      }
      this.setState({
        selectedIndex: this.props.month - 1
      });
    }
  }

  render() {
    const { classes, data } = this.props;
    var { flag, selectedIndex, realData } = this.state;

    return (
      <div {...this.props}>
        {!isEmpty(data) ? (
          <div>
            <div className="dropdown" onClick={this.clickedDropDown}>
              <span className="dropdown__text">{realData[selectedIndex]}</span>
              <IconTag className="dropdown__icon" />
            </div>
            {flag ? (
              <div className="itemlist">
                <div
                  //   className={classes.root}
                  className="root"
                >
                  <div className="force-overflow">
                    <List component="nav">
                      {realData.map((item, index) => {
                        return (
                          <ListItem
                            button
                            selected={selectedIndex === index ? true : false}
                            onClick={event =>
                              this.handleListItemClick(event, index)
                            }
                            className={classes.listItem}
                          >
                            <ListItemText>
                              <span
                                className="listText"
                                style={
                                  selectedIndex === index
                                    ? { color: "#1e2bff" }
                                    : { color: "#999fba" }
                                }
                              >
                                {item}
                              </span>
                            </ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

DateDropDown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateDropDown);
