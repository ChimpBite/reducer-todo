import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTask } from '../../actions/Actions';

class Header extends Component {
  state = {
    newTask: '',
    completed: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewTask = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
  };

  render() {
    return (
      <div>
        <h1>TODO List</h1>
        <input
          className='todo-add'
          type='text'
          name='newTask'
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button className='button' onClick={this.addNewTask}>
          Add to list
        </button>
        <button className='button'>Clear Completed</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    task: state.task,
  };
};

export default connect(mapStateToProps, { addNewTask })(Header);
