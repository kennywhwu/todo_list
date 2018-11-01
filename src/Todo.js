import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li className="Todo">
        {this.props.task}
        <button onClick={this.props.handleClear}>X</button>
        <button onClick={this.props.handleEdit}>edit</button>
      </li>
    );
  }
}

export default Todo;
