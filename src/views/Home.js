import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';

export default function Home({
  uid,
}) {
  const [todos, setTodos] = useState([]);
  const filteredTodos = todos.filter((todo) => todo.complete === false);

  useEffect(() => getTodos(uid).then(setTodos), []);

  return (
    <div>
      <TodoForm
        setTodos={setTodos}
        uid={uid}
      />
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.firebaseKey}
          todo={todo}
          uid={uid}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
};
