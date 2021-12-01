import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';
import { getTodos } from '../api/data/todoData';

export default function Home({
  uid,
}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => getTodos(false, uid).then(setTodos), []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          uid={uid}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
};
