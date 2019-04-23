import React from 'react';
import Timer from './components/Timer';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import ClearButton from './components/ClearButton';
import EmptyState from './components/EmptyState';

import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
    this.startSession = this.startSession.bind(this);
    this.increaseSessionsCompleted = this.increaseSessionsCompleted.bind(this);
    this.toggleItemIsCompleted = this.toggleItemIsCompleted.bind(this);

    this.state = {
      items: [], 
      nextItemId:  0, 
      sessionIsRunning: false,
      itemIdRunning : null,
      toggle : 0
    };
  }

  addItem(description) {
    const { nextItemId } = this.state;
    const newItem = {
      id: nextItemId,
      description: description,
      sessionsCompleted: 0,
      isCompleted: false
    };
    this.setState((prevState => ({
      items: prevState.items.concat(newItem),
      nextItemId: prevState.nextItemId + 1
    })));
  }

  clearCompletedItems() {
    this.setState({items: this.state.items.filter((item) => !item.isCompleted)});
  }

  increaseSessionsCompleted(itemId) {
    let newItems = [...this.state.items]; 
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === itemId) {
        newItems[i].sessionsCompleted += 1;
      }
    }
    this.setState((prevState => ({
      items: newItems
    })));
  }

  toggleItemIsCompleted(itemId) {
    let newItems = [...this.state.items]; 
    let togNum = this.state.toggle;
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === itemId) {
        if (newItems[i].isCompleted) {
          newItems[i].isCompleted = false;
          togNum -= 1;
        }
        else {
          newItems[i].isCompleted = true;
          togNum += 1;
        }
      }
    }
    this.setState((prevState => ({
      items: newItems,
      toggle: togNum
    })));
  }

  startSession(id) {
    this.setState((prevState => ({
      sessionIsRunning: true,
      itemIdRunning: id
    })));
  }

  render() {
    const {
      items,
      sessionIsRunning,
      itemIdRunning,
      areItemsMarkedAsCompleted,
      toggle
    } = this.state;
    return (
      <div className="flex-wrapper">
        <div className="container">
          <header>
            <h1 className="heading">Today</h1>
            {(toggle > 0) && <ClearButton onClick={this.clearCompletedItems} />}
          </header>
          {items.length == 0 && <EmptyState />}
            {sessionIsRunning && <Timer
              mode="WORK"
              onSessionComplete={() => this.increaseSessionsCompleted(itemIdRunning)}
              autoPlays
            />}
            <div className="items-container">
              {items.map((item) =>
              <TodoItem description = {item.description}
                        sessionsCompleted = {item.sessionsCompleted}
                        isCompleted = {item.isCompleted}
                        startSession = {() => this.startSession(item.id)}
                        toggleIsCompleted = {() => this.toggleItemIsCompleted(item.id)}
                        key = {item.id}/>) }
            </div>
        </div>
        <footer>
          <TodoInput addItem={this.addItem} />
        </footer>
      </div>
    );
  }
}

export default App;
