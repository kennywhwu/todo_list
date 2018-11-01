import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <span className="Todo-task">{this.props.task}</span>
        <span>
          <button onClick={this.props.handleClear}>X</button>
          <button onClick={this.props.handleEdit}>edit</button>
        </span>
      </div>
    );
  }
}

export default Todo;
