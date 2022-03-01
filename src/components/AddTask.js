import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component{
  minDate = new Date().toISOString().slice(0,10);

  state = {
    text: "",
    checked: false,
    date: this.minDate
  }

  handleForm = (e) => {
    if(e.target.type === "text"){
      this.setState({
        text: e.target.value
      });
    }
    if(e.target.type === "checkbox"){
      this.setState((prevState) => ({
        checked: !prevState.checked
      }));
    }
    if(e.target.type === "date"){
      this.setState({
        date: e.target.value
      });
    }
  }

  addTask = (e) => {
    e.preventDefault();
    const { text, checked, date } = this.state;
    if(text.length >= 5){
      this.props.add(text,checked,date);
    }
  }

  render(){
    let maxDate = this.minDate.slice(0,4)*1+1;
    maxDate = maxDate+"-12-31";

    return(
      <div className="addTask">
        <p>Dodaj nowe zadanie <i className="fas fa-hand-point-down"></i></p>
        <form>
          <input type="text" value={this.state.text} onChange={this.handleForm} placeholder="Nazwa zadania..." />
          <br />
          <div className="priority">
            <label htmlFor="priority">Priorytet:  </label>
            <input type="checkbox" id="priority" checked={this.state.checked} onChange={this.handleForm} />
          </div>
          <br />
          <div className="date">
            <label htmlFor="date">Do kiedy zrobić: </label>
            <br />
            <input type="date" id="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleForm} />
          </div>
          <button className="btnAdd" onClick={this.addTask}>Dodaj zadanie</button>
        </form>
      </div>
    )
  }
}

export default AddTask;