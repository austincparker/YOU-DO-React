import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

function Initialize() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      {todos.map((todo) => (
        <Todo key={todo.firebaseKey} taco={todo} setTodos={setTodos} />
      ))}
    </>
  );
}

export default Initialize;
