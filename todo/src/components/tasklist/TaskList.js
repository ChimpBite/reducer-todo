import React from 'react';
import Task from './Task';

const TaskList = ({ setComplete, List }) => {
  return (
    <div className='tasks'>
      {List.map(task => (
        <Task key={task.id} task={task} taskComplete={setComplete} />
      ))}
    </div>
  );
};

export default TaskList;
