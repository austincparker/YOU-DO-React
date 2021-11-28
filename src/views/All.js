import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function All({ setEditItem }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setAllTodos);
  }, []);
  return (
    <div>
      {allTodos.map((allTodo) => (
        <Todo
          key={allTodo.firebaseKey}
          todo={allTodo}
          setTodos={setAllTodos}
          setEditItem={setEditItem}
        />
      ))}
    </div>
  );
}

All.propTypes = {
  setEditItem: PropTypes.func.isRequired,
};
