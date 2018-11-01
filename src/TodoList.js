import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodos = this.addTodos.bind(this);
    this.setTodo = this.setTodo.bind(this);
  }

  addTodos(todo) {
    let addNewTodo = { ...todo, id: uuid() };
    this.setState(st => ({ todos: [...st.todos, addNewTodo] }));
  }

  clearTodo(id) {
    this.setState(st => ({
      todos: st.todos.filter(e => {
        return e.id !== id;
      })
    }));
  }

  editTodo(id) {
    this.setState(st => ({
      todos: st.todos.map(e => {
        if (e.id === id) return { ...e, edit: true };
        else return { ...e, edit: false };
      })
    }));
  }

  setTodo(todo) {
    this.setState(st => ({
      todos: st.todos.map(e => {
        if (e.id === todo.id) {
          todo.edit = false;
          return todo;
        } else return e;
      })
    }));
  }

  render() {
    let todos = this.state.todos.map(todo => {
      if (todo.edit === false) {
        return (
          <Todo
            key={todo.id}
            task={todo.task}
            handleClear={() => this.clearTodo(todo.id)}
            handleEdit={() => this.editTodo(todo.id)}
          />
        );
      } else {
        return (
          <EditTodoForm
            handleEditTodo={this.setTodo}
            value={todo.task}
            id={todo.id}
            key={todo.id}
          />
        );
      }
    });
    return (
      <div className="TodoList">
        <div className="TodoList-newTodoContainer">
          <h1>SQL King Task Master</h1>
          <NewTodoForm handleNewTodo={this.addTodos} />
        </div>
        <div className="TodoList-todos">{todos}</div>
      </div>
    );
  }
}
export default TodoList;
