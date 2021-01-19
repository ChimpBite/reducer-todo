import Header from './components/header/Header';
import TodoList from './components/todolist/TodoList';

import { initialState } from './reducers/Reducers';

import './App.css';

const tasks = initialState;

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoList tasks={tasks} key={tasks.id} />
    </div>
  );
}

export default App;
