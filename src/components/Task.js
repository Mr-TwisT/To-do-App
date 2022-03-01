import React from "react";
import "./Task.css";

const Task = (props) => {
  const { id, name, date, important, done } = props.task;
  const style = {
    color: "#c00437",
  };

  if (!done) {
    const { order } = props;
    return (
      <div className="task">
        <p style={important ? style : null}>
          <strong>Zadanie {order}: </strong>
          {name}
          <em> - do {date}</em>
        </p>
        <button className="btnDone" onClick={() => props.done(id)}>
          Zrobione
        </button>
        <button className="btnDelete" onClick={() => props.delete(id)}>
          X
        </button>
      </div>
    );
  }
  if (done) {
    return (
      <div className="task">
        <p>
          {name}
          <em> - do {date}</em>
        </p>
        <button className="btnDelete" onClick={() => props.delete(id)}>
          X
        </button>
      </div>
    );
  }
};

export default Task;
