import React from 'react';
import '../styles/todoInput.css';
import { ReactComponent as Plus } from '../icons/plus.svg';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoItemValue: '', // initialize to empty string
      newlocation: '',
      startTime: new Date(),
      endTime: new Date()
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
  }

  handleTitle(e) {
    const newTodoItemValue = e.target.value;
    this.setState({ newTodoItemValue });
  }

  handleLocation(e) {
    const newlocation = e.target.value;
    this.setState({ newlocation });
  }
  handleChangeStartTime(date) {
    this.setState({startTime: date});
  }
  handleChangeEndTime(date) {
    this.setState({endTime: date});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addItem } = this.props;
    const { newTodoItemValue , newlocation, startTime, endTime} = this.state;

    if (newTodoItemValue !== '') { // form value is not empty
      addItem(newTodoItemValue, newlocation, startTime.toLocaleTimeString(), endTime.toLocaleTimeString());
      this.setState({ newTodoItemValue: '' , newlocation: ''}); // clear back to empty string
    }
  }

  render() {
    const { newTodoItemValue, newlocation } = this.state;
    return (
      <div className="todo-input-container">
        <div class="row">
          <input
            placeholder="Add Task..."
            value={newTodoItemValue}
            onChange={this.handleTitle}
            className="todo-input"
          />
        </div>

        <div class="row">
          <input
            placeholder="Location"
            value={newlocation}
            onChange={this.handleLocation}
            className="todo-input"
          />
          <DatePicker
            selected={this.state.startTime}
            onChange={this.handleChangeStartTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            timeCaption="Time"
        />
        <DatePicker
            selected={this.state.endTime}
            onChange={this.handleChangeEndTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            timeCaption="Time"
        />
        </div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="todo-input-button">
            <Plus />
          </button>
        </form>
      </div>
    );
  }
}
