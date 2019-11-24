import React from "react";
import { Card, CardHeader } from "@material-ui/core";
import { ItemTypes } from "../../constants/dragItem";
import { DragSource } from "react-dnd";
import { withStyles } from "@material-ui/core";

const useStyles = theme => ({
  card: {
    margin: "15px",
    maxWidth: 200,
    borderRadius: 10
  },
  header: {
    textAlign: "center"
  }
});

const knightSource = {
  beginDrag(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Semester({ classes, connectDragSource, isDragging, semester }) {
  return connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      <Card className={classes.card} raised={true}>
        {/* <CardActionArea onClick={() => onSelectUniversity(university_name)}> */}
        <CardHeader title={semester.semester_name} className={classes.header} />
        {/* </CardActionArea> */}
      </Card>
    </div>
  );
}

export default DragSource(ItemTypes.SEMESTER, knightSource, collect)(
  withStyles(useStyles)(Semester)
);
