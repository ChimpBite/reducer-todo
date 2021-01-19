export const ADD_TASK = 'ADD_TASK';
export const TASK_COMPLETED = 'TODO_COMPLETED';
export const CLEAR_TASK = 'CLEAR_TASK';

export const addTask = task => {
  console.log('Action:', task);
  const newTask = { task, id: Date.now(), completed: false };
  console.log(newTask);
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const taskComplete = id => {
  return {
    type: TASK_COMPLETED,
    payload: id,
  };
};

export const clearTask = () => {
  return { type: CLEAR_TASK };
};
