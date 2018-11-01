import React, { Component } from 'react';

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: props.value, id: props.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleEditTodo(this.state);
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
        <button>Edit task</button>
      </form>
    );
  }
}

export default EditTodoForm;
