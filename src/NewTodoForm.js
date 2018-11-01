import React, { Component } from 'react';
// import Todo from './Todo';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      edit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleNewTodo(this.state);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Task: </label>
        <input
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Create a new task</button>
      </form>
    );
  }
}

export default NewTodoForm;
