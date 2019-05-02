import React from 'react';
import '../styles/todoInput.css';
import { ReactComponent as Plus } from '../icons/plus.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import 'semantic-ui-css/semantic.min.css'
import ButtonExampleCircular from "./ButtonExampleCircular.jsx";
import SearchBar from "./SearchBar";
import LocationData from "../LocationData"
import Photos from "./Photos.jsx"

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoItemValue: '', // initialize to empty string
      newlocation: '',
      startTime: new Date(),
      endTime: new Date(),
      start: parseInt((new Date()).toLocaleTimeString().split(':')[0]),
      f:'',
      pins : []
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handlefilter = this.handlefilter.bind(this);
    this.handleMap = this.handleMap.bind(this);
    this.handlePin = this.handlePin.bind(this);
  }
  handlefilter(e) {
    const v = e.target.value;
    this.setState({f: v});
  }

  handlePin(e) {
    const v = e.target.value;
    this.setState({f: v});
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
    var res = parseInt(date.toLocaleTimeString().split(':')[0])
    this.setState({start: res, startTime: date});
  }
  handleChangeEndTime(date) {
    this.setState({endTime: date});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addItem } = this.props;
    const { newTodoItemValue , newlocation, startTime, endTime, start} = this.state;

    if (newTodoItemValue !== '') { // form value is not empty
      addItem(newTodoItemValue, newlocation, startTime.toLocaleTimeString(), endTime.toLocaleTimeString(), start);
      this.setState({ newTodoItemValue: '' , newlocation: ''}); // clear back to empty string
    }
  }
  handleMap(l) {
    

  }

  render() {
    //const ButtonExampleCircular = () => 
    const { newTodoItemValue, newlocation } = this.state;
    return (
      
      <div className="todo-input-container">
      <div className = "right">
      <div>
        <div className="row">
          <input
            placeholder="Add Task..."
            value={newTodoItemValue}
            onChange={this.handleTitle}
            className="todo-input"
          />
        </div>

        <div className="row">
          <input
            placeholder="Location"
            value={newlocation}
            onChange={this.handleLocation}
            className="todo-input"
          />
        </div>  
        <div className="row">
        <h5 >Start:  
          <DatePicker
            selected={this.state.startTime}
            onChange={this.handleChangeStartTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            dateFormat="h:mm aa"
            timeCaption="Time"
            className="time-input"
        />
        </h5>
          <h5> End: 
          <DatePicker
              selected={this.state.endTime}
              onChange={this.handleChangeEndTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              dateFormat="h:mm aa"
              timeCaption="Time"
              className="time-input"
          />
          </h5>
        </div>

        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="todo-input-button">
            <Plus />
          </button>
        </form>
        </div>
        </div>
        

        <div className = "left">
        <input placeholder = "search for" onChange = {this.handlefilter} className="time-input"/>
        {LocationData.locations.filter(lo => lo.city.includes(this.state.f)).map((l) => <Photos loc={l} onclick ={() => this.handlePin(l.id)}/> )}
        </div>
        

      </div>
      
    );
  }
}
