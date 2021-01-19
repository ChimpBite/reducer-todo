export const ADD_TASK = 'ADD_TODO';
export const TASK_COMPLETED = 'TODO_COMPLETED';

export function addNewTask(newTask) {
  console.log(newTask);
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}

export function toggleComplete(toggleCompleted) {
  return {
    type: TASK_COMPLETED,
    payload: toggleCompleted,
  };
}
