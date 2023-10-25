export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text,
  });
  
  export const deleteTodo = (index) => ({
    type: 'DELETE_TODO',
    index,
  });
  
  export const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    index,
  });
  
  export const editTodo = (index, text) => ({
    type: 'EDIT_TODO',
    index,
    text,
  });
  
  // reducers.js
  const initialState = {
    todos: [],
  };
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              text: action.text,
              done: false,
            },
          ],
        };
  
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.index),
        };
  
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.index
              ? { ...todo, done: !todo.done }
              : todo
          ),
        };
  
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.index
              ? { ...todo, text: action.text, done: false }
              : todo
          ),
        };
  
      default:
        return state;
    }
  };
  