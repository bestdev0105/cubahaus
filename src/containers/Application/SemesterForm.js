import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import TitleText from "../../components/TitleText";
import DropField from "./DropField";
import Semester from "./Semester";
import {
  IconHome,
  IconTag,
  IconCheckIn,
  IconTrolley
} from "../../components/Icon";
import Calendar from "react-calendar";
const styles = theme => ({
  buttonsWrapper: {
    padding: theme.spacing.unit * 4
  }
});

const SemesterForm = ({
  classes,
  selectedSemesters,
  semesterList,
  onSemesterChange,
  onChangeStartingDate,
  onChangeEndDate,
  starting_date,
  end_date
}) => {
  return (
    <div className="semester">
      <div className="semester__title">
        <TitleText>Semesters</TitleText>
      </div>
      <span className="semester__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <br /> elit, sed do eiusmod tempor
      </span>
      <Grid
        container
        direction="row"
        justify="center"
        className="semester__semesters"
      >
        {selectedSemesters.map((semester, index) => {
          return (
            <DropField
              key={index}
              selected={selectedSemesters}
              list={semesterList}
              index={index}
              onRemove={() => onSemesterChange(null, index)}
              onDrop={item => onSemesterChange(item.semester, index)}
            >
              {semester && (
                <>
                  <h2>{semester.semester_name}</h2>
                  <p>
                    {semester.semster_starting_date} -{" "}
                    {semester.semster_ending_date}
                  </p>
                </>
              )}
            </DropField>
          );
        })}
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        className="semester__semesterlist"
      >
        {semesterList.map((semester, index) => (
          // <DropField key={index}>
          <Semester key={index} semester={semester} />
          // </DropField>
        ))}
      </Grid>
      <Grid className="calendars">
        <div className="calendars__cal">
          <div className="calendarTitle">
            <IconCheckIn className="calendarTitle__icon" />
            <span className="calendarTitle__text">Start date</span>
          </div>
          <Calendar
            calendarType="US"
            className="calendar"
            onChange={onChangeStartingDate}
            value={new Date(starting_date)}
          />
        </div>
        <div className="calendars__cal">
          <div className="calendarTitle">
            <IconTrolley className="calendarTitle__icon" />
            <span className="calendarTitle__text">Finish date</span>
          </div>
          {/* <SemesterCalendar selected_date={end_date} /> */}
          <Calendar
            calendarType="US"
            className="calendar"
            onChange={onChangeEndDate}
            value={new Date(end_date)}
          />
        </div>
      </Grid>
      <Grid className="daysGrid">
        <span className="daysNumber">
          {Math.round(
            Math.abs(
              new Date(starting_date).getTime() - new Date(end_date).getTime()
            ) / 8.64e7
          )}
        </span>
        <span className="daysText">
          days of <br />
          awesomeness
        </span>
        {/* <div className="circles" /> */}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(SemesterForm);
