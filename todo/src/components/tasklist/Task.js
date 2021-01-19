import React from 'react';

const Task = ({ task, taskComplete }) => {
  console.log(task.id);
  return (
    <div
      onClick={() => taskComplete(task.id)}
      className={`task${task.completed ? 'completed' : ''}`}
    >
      <p>{task.task}</p>
    </div>
  );
};

export default Task;
