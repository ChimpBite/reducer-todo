import React, { useState } from 'react';

const TaskForm = ({ setTask, setClear }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleChange = e => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTask(taskInput);
    setTaskInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='add-task'
          type='text'
          name='task'
          onChange={handleChange}
          value={taskInput}
        />
        <button>Add Task</button>
        <button onClick={setClear}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TaskForm;
