import React, { Component } from 'react';
import './Main.css';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    isEdit: false,
    editIndex: -1
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1 || newTask === '') return;

    const { isEdit } = this.state;
    const newTasks = [...tasks];

    if (!isEdit) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: ''
      });
    } else {
      const { editIndex } = this.state;
      newTasks[editIndex] = newTask;
      this.setState({
        newTask: '',
        tasks: [...newTasks],
        isEdit: false,
        editIndex: -1
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      newTask: tasks[index],
      isEdit: true,
      editIndex: index
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks]
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className='main'>
        <h1>Tasklist</h1>
        <form onSubmit={this.handleSubmit} action='#' className='form'>
          <input onChange={this.handleChange} type='text' value={newTask} />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>

        <ul className='tasks'>
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className='edit' />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className='delete' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
