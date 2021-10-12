import React from 'react';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../api/data/todoData';

export default function Todo({ taco, setTodos }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      console.warn('delete');
      deleteTodo(taco.firebaseKey).then(setTodos);
    } else {
      console.warn(taco);
      updateTodo({ ...taco, complete: true }).then(setTodos);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="d-flex justify-content-between alert alert-light todo-comp"
        role="alert"
      >
        <button
          onClick={() => handleClick('complete')}
          className="btn btn-success"
          type="button"
        >
          COMPLETE
        </button>
        {taco.name}
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    firebaseKey: PropTypes.string,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
};
