import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './actions';

function TodoApp({ todos, addTodo, deleteTodo, toggleTodo, editTodo }) {
  const [inputText, setInputText] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  const handleEditTodo = (index) => {
    if (inputText.trim() !== '') {
      editTodo(index, inputText);
      setInputText('');
      setEditingIndex(-1);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Додати нове завдання"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {editingIndex === -1 ? (
          <button onClick={handleAddTodo}>Додати</button>
        ) : (
          <button onClick={() => handleEditTodo(editingIndex)}>Зберегти</button>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(index)}
            >
              {editingIndex === index ? (
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </span>
            {editingIndex === index ? (
              <button onClick={() => handleEditTodo(index)}>Зберегти</button>
            ) : (
              <>
                <button onClick={() => setEditingIndex(index)}>Редагувати</button>
                <button onClick={() => deleteTodo(index)}>Видалити</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo, toggleTodo, editTodo })(
  TodoApp
);
