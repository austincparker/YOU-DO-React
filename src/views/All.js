import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllTodos } from '../api/data/todoData';
import Todo from '../components/Todo';

export default function All({ uid }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    getAllTodos(uid).then(setAllTodos);
  }, []);
  return (
    <div>
      {allTodos.map((allTodo) => (
        <Todo
          key={allTodo.firebaseKey}
          todo={allTodo}
          setTodos={setAllTodos}
        />
      ))}
    </div>
  );
}

All.propTypes = {
  uid: PropTypes.string.isRequired,
};
