import { ADD_TASK, TASK_COMPLETED, CLEAR_TASK } from '../actions/Actions';

export const initialState = {
  tasks: [
    {
      task: 'grocery shopping',
      id: 1234,
      completed: false,
    },
    {
      task: 'cook dinner',
      id: 5678,
      completed: false,
    },
    {
      task: 'study',
      id: 9234,
      completed: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TASK_COMPLETED:
      return {
        ...state,
        tasks: [
          ...state.tasks.map(item => {
            if (item.id === action.payload) {
              return { ...item, completed: !item.completed };
            }
            return item;
          }),
        ],
      };
    case CLEAR_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(item => {
            return !item.completed;
          }),
        ],
      };
    default:
      return state;
  }
}
console.log('Reducer:', initialState);

export default reducer;
