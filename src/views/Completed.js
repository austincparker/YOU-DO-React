import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTodos } from '../api/data/todoData';
import CompletedTodos from '../components/CompletedTodos';

export default function Completed({ uid }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  const filteredTodos = completedTodos.filter((todo) => todo.complete);

  useEffect(() => {
    getTodos(uid).then(setCompletedTodos);
  }, []);
  return (
    <div>
      {filteredTodos.map((completedTodo) => (
        <CompletedTodos
          key={completedTodo.firebaseKey}
          completedTodo={completedTodo}
          setCompletedTodos={setCompletedTodos}
          uid={uid}
        />
      ))}
    </div>
  );
}

Completed.propTypes = {
  uid: PropTypes.string,
};

Completed.defaultProps = {
  uid: '',
};
