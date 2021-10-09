import React, { useEffect, useState } from 'react';
import getTodos from '../api/data/todoData';

function Initialize() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <h1 key={todo.name}>{todo.name}</h1>
      ))}
    </>
  );
}

export default Initialize;
