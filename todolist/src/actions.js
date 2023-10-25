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
  

  