import React from 'react';
import '../styles/todoItem.css';
import SessionsCompletedCounter from './SessionsCompletedCounter';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as Clock } from '../icons/clock.svg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TodoItem({
  description,
  location,
  start, 
  end,
  sessionsCompleted,
  isCompleted,
  startSession,
  toggleIsCompleted,
}) {
  return (
    
    <div className="card todo-item-container">
      <div className="todo-item-container-left">
        <button onClick={toggleIsCompleted} type="button" className="todo-item-complete-button">
          { isCompleted
            ? <div className="todo-item-circle todo-item-circle-check"><Check /></div>
            : <div className="todo-item-circle todo-item-circle-empty" />
          }
        </button>
        <div>
          <div className="todo-item-description">{ description }</div>
          <div className="todo-item-description">{ location }</div>
          <div className="todo-item-description">{ start }</div>
          <div className="todo-item-description">{ end }</div>
          <SessionsCompletedCounter sessionsCompleted={sessionsCompleted} />
        </div>
      </div>
      <button type="button" onClick={startSession} className="todo-item-start-session-button"><Clock /></button>
    </div>
  );
}

export default TodoItem;
