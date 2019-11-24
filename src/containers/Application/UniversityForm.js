import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import { Card, CardHeader, CardMedia, CardActionArea } from "@material-ui/core";
import TitleText from "../../components/TitleText";
import { withStyles } from "@material-ui/core";

const useStyles = theme => ({
  card: {
    margin: "15px",
    maxWidth: "240px",
    maxHeight: "160px",
    borderRadius: 10,
    boxShadow: "0 0 27px 8.1px rgba(210, 215, 255, 0.21)",
    backgroundColor: "#ffffff"
  },
  selectedCard: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#f0aa42"
  },
  titleRoot: {
    padding: 0
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    color: "#4c5788",
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: "0.9px"
  },
  media: {
    marginTop: 20,
    objectFit: "contain",
    width: "80%",
    margin: "0 auto"
  },
  done_icon: {
    backgroundColor: "#DDE2FF",
    padding: 8,
    borderRadius: "50%",
    fontSize: 22,
    position: "absolute",
    top: 10,
    right: 10
  },
  buttonsWrapper: {
    padding: theme.spacing.unit * 4
  }
});

const UniversityForm = ({
  classes,
  universityList,
  curUniversity,
  onSelectUniversity
}) => {
  const curIndex = universityList
    .map(item => item.university_name)
    .indexOf(curUniversity);
  return (
    <div className="university">
      <div className="university__title">
        <TitleText>University</TitleText>
      </div>
      <Grid container direction="row" justify="center">
        {universityList.map((university, index) => {
          const selected = curIndex === index;
          const { university_name, university_logo } = university;
          return (
            <Card
              key={index}
              className={`${classes.card} ${
                selected ? classes.selectedCard : classes.unselectedCard
              }`}
              raised={true}
            >
              <CardActionArea
                onClick={() => onSelectUniversity(university_name)}
              >
                {selected && (
                  <DoneIcon color="primary" className={classes.done_icon} />
                )}
                <CardMedia
                  component="img"
                  alt={university_name}
                  image={university_logo}
                  title={university_name}
                  height={100}
                  className={classes.media}
                />
                <CardHeader
                  title={university_name}
                  classes={{ root: classes.titleRoot, title: classes.title }}
                />
              </CardActionArea>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

UniversityForm.propTypes = {
  classes: PropTypes.object,
  universityList: PropTypes.array
};

export default withStyles(useStyles)(UniversityForm);
