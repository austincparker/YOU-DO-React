import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTodos } from '../api/data/todoData';
import CompletedTodos from '../components/CompletedTodos';

export default function Completed({ uid }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    getTodos(true, uid).then(setCompletedTodos);
  }, []);
  return (
    <div>
      {completedTodos.map((completedTodo) => (
        <CompletedTodos
          key={completedTodo.firebaseKey}
          completedTodo={completedTodo}
          setCompletedTodos={setCompletedTodos}
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
