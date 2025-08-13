import React, { useState } from 'react';
import './App.css';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newError, setError] = useState('');

const [newLoading, setLoading] = useState('');
const [newLoading, setLoading] = useState('');

const [newLoading, setLoading] = useState('');
const [newLoading, setLoading] = useState('');
const [newLoading, setLoading] = useState('');
const [newLoading, setLoading] = useState('');
const [newLoading, setLoading] = useState('');








 
  


  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="Todolist">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={handleChange} 
        placeholder="Add a new todo" 
      />
</br>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
