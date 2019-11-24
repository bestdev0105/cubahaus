import React from "react";
import { ItemTypes } from "../../constants/dragItem";
import { DropTarget } from "react-dnd";
import { Fab } from "@material-ui/core";
import CrossIcon from "@material-ui/icons/Close";

const squareTarget = {
  drop(props, monitor) {
    // moveKnight(props.x, props.y);
    props.onDrop(monitor.getItem());
  },
  canDrop(props, monitor) {
    const { list } = props;
    const curItem = monitor.getItem();
    const index = list.findIndex(
      item => item.semester_name === curItem.semester.semester_name
    );

    let nonSelected = true;
    for (var i = 0; i < props.selected.length; i++) {
      if (props.selected[i] !== null) {
        nonSelected = false;
        break;
      }
    }
    const prevItem = props.index === 0 ? {} : props.selected[index - 1];
    if (index === props.index && (nonSelected || prevItem !== null)) {
      return true;
    } else {
      return false;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    dropItem: monitor.getItem()
  };
}

function DropField({ x, y, connectDropTarget, isOver, children, onRemove }) {
  return connectDropTarget(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "150px",
        height: "150px",
        border: "1px dashed red",
        margin: "10px"
      }}
    >
      <Fab
        size={"small"}
        style={{ position: "absolute", top: "5px", right: "5px" }}
        onClick={onRemove}
      >
        <CrossIcon fontSize={"small"} />
      </Fab>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {children}
      </div>
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: "yellow"
          }}
        />
      )}
    </div>
  );
}

export default DropTarget(ItemTypes.SEMESTER, squareTarget, collect)(DropField);
