import React, { useReducer } from 'react';

import reducer, { initialState } from '../../reducers/Reducer';
import { addTask, taskComplete, clearTask } from '../../actions/Actions';

import TaskList from '../tasklist/TaskList';
import TaskForm from '../taskform/TaskForm';

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('TASKS:', state.tasks);

  const setTask = task => {
    dispatch(addTask(task));
  };

  const setComplete = taskID => {
    dispatch(taskComplete(taskID));
  };

  const setClear = () => {
    dispatch(clearTask());
  };

  return (
    <div>
      <h1>TODO List</h1>
      <TaskForm setTask={setTask} setClear={setClear} />
      <TaskList setComplete={setComplete} List={state.tasks} />
    </div>
  );
};

export default Main;
