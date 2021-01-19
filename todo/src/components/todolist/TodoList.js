import React from 'react';

const TodoList = props => {
  const { tasks } = props;
  return (
    <div>
      {tasks.map(todo => (
        <div key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          {todo.task}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
