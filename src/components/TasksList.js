import React from "react";
import "./TasksList.css";
import Task from "./Task";

const TasksList = (props) => {
  const active = props.tasks.filter((task) => !task.done);
  const done = props.tasks.filter((task) => task.done);

  const activeTasks = active.map((task, i) => (
    <Task
      key={task.id}
      task={task}
      done={props.done}
      delete={props.delete}
      order={i}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} />
  ));

  return (
    <div className="tasksList">
      <div className="notepad">
        <h2>
          <p>Lista zadań: </p>
        </h2>
        <div className="activeTasks">{activeTasks}</div>
        <div className="doneTasks">
          <em>Zadania zrobione ({doneTasks.length}):</em>
          {doneTasks}
        </div>
      </div>
    </div>
  );
};

export default TasksList;
