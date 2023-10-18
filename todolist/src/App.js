import './App.css';
import React, { useState } from 'react';

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, {text: inputText, done: false}]);
      setInputText('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='todoWrap'>
      <h1>Todo List</h1>
      <div>
        <input
        type="text"
        placeholder="Додати нове завдання"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodo}>Додати</button>
      </div>
      <ul className='todoThingsWrap'>
        {todos.map((todo, index) => (
          <li className='todoThings' key={index}>
            <span className='spanStyle' style={{textDecoration: todo.done ? 'line-through' : 'none'}}
              onClick={() => toggleTodo(index)}
             > 
             {todo.text} 
            </span>
            <button className='deleteBtn' onClick={() => deleteTodo(index)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
