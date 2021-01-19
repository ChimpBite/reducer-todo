import { ADD_TASK, TASK_COMPLETED } from '../actions/Actions';

export const initialState = [
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
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: action.payload,
        id: Date.now(),
        completed: false,
      };
    case TASK_COMPLETED:
      return { completed: action.payload };
    default:
      return state;
  }
}

export default reducer;
