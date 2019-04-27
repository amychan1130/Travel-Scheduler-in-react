import React from 'react';
import '../styles/todoItem.css';
import SessionsCompletedCounter from './SessionsCompletedCounter';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as Clock } from '../icons/clock.svg';

import {Timeline, TimelineEvent} from 'react-event-timeline';

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

    <TimelineEvent 
      title= ""
      createdAt= {start}
    >
      <h3>{description}</h3>
      <h4>
      <img src={require('../icons/maps-and-flags.png')} height="15" width="15"></img>
      {location}</h4>
    </TimelineEvent>
    
  );
}

export default TodoItem;
