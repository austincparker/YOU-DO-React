import React from 'react';
import PropTypes from 'prop-types';
import { deleteCompletedTodo } from '../api/data/todoData';

export default function CompletedTodos({ completedTodo, setCompletedTodos }) {
  const handleClick = () => {
    deleteCompletedTodo(completedTodo.firebaseKey).then(setCompletedTodos);
  };

  return (
    <>
      <div
        className="d-flex justify-content-between alert alert-light"
        role="alert"
      >
        {completedTodo.name}
        <button onClick={handleClick} className="btn btn-danger" type="button">
          DELETE
        </button>
      </div>
    </>
  );
}

CompletedTodos.propTypes = {
  completedTodo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setCompletedTodos: PropTypes.func.isRequired,
};
