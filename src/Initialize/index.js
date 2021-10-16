import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';
import Routes from '../routes';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <>
      <Navigation />
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
    </>
  );
}

export default Initialize;
