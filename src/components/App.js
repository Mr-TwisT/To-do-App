import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TasksList from './TasksList';

class App extends Component{
  state = {
    tasks: [
      {
        id: 0,
        name: "Kupić ciasto",
        date: '30.10.2021',
        important: false,
        done: true
      },
      {
        id: 1,
        name: "Zobaczyć film",
        date: '29.10.2021',
        important: true,
        done: false
      },
      {
        id: 2,
        name: "Pograć w coś",
        date: '30.12.2021',
        important: false,
        done: false
      }
    ]
  }

  taskDone = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id===id);
    tasks[index].done = !tasks[index].done;
    this.setState({
      tasks
    });
  }

  taskDelete = (id) => {
    const tasks = Array.from(this.state.tasks);
    const filtered = tasks.filter(task => task.id!==id);
    this.setState({
      tasks: filtered
    });
  }

  addTask = (text,important,date) => {
    const tasks = [...this.state.tasks];
    const newTask = {
      id: tasks.length,
      name: text,
      date: date,
      important,
      done: false,
    };
    tasks.push(newTask);
    this.setState({
      tasks
    });
  }

  render(){
    return(
      <>
        <header className="header">
          <Header />
        </header>
        <br />
        <hr />
        <div className="container">
          <AddTask add={this.addTask} />
          <TasksList tasks={this.state.tasks} done={this.taskDone} delete={this.taskDelete} />
        </div>
      </>
    )
  }
}

export default App;