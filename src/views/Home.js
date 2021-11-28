import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

export default function Home({
  todos,
  setTodos,
  setEditItem,
  uid,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.firebaseKey}
          taco={todo}
          setTodos={setTodos}
          setEditItem={setEditItem}
          uid={uid}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};
