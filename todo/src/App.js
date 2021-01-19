import Header from './components/header/Header';
import TodoList from './components/todolist/TodoList';

import { initialState } from './reducers/Reducer';

import './App.css';

console.log(initialState);

const tasks = initialState;

console.log(tasks);

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoList tasks={tasks} key={tasks.id} />
    </div>
  );
}

export default App;
