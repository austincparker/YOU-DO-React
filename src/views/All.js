import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function All() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setTodos);
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.firebaseKey} taco={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}
