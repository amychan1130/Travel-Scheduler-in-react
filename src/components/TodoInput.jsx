import React from 'react';
import '../styles/todoInput.css';
import { ReactComponent as Plus } from '../icons/plus.svg';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoItemValue: '', // initialize to empty string
      newlocation: ''
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    const newTodoItemValue = e.target.value;
    this.setState({ newTodoItemValue });
  }

  handleLocation(e) {
    const newlocation = e.target.value;
    this.setState({ newlocation });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addItem } = this.props;
    const { newTodoItemValue , newlocation} = this.state;

    if (newTodoItemValue !== '') { // form value is not empty
      addItem(newTodoItemValue, newlocation);
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
