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
      <TodoForm />
      {todos.map((todo) => (
        <Todo key={todo.name} taco={todo} />
      ))}
    </>
  );
}

export default Initialize;
