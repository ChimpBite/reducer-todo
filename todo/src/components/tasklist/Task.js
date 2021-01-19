import React from 'react';

import './TaskList.scss';

const Task = ({ task, taskComplete }) => {
  console.log(task.id);
  return (
    <div
      onClick={() => taskComplete(task.id)}
      className={`${task.completed ? 'completed' : ''}`}
    >
      <p>{task.task}</p>
    </div>
  );
};

export default Task;
