import React from 'react';
import PropTypes from 'prop-types';
import { deleteTodo, updateTodo } from '../api/data/todoData';

export default function Todo({ taco, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      console.warn('delete');
      deleteTodo(taco.firebaseKey).then(setTodos);
    } else if (method === 'edit') {
      console.warn(taco);
      updateTodo(taco.firebaseKey, { name: '' }).then(setTodos);
      console.warn(taco);
    } else {
      updateTodo(taco.firebaseKey, { complete: !taco.complete }).then(setTodos);
      console.warn(taco);
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
          {taco.complete ? 'DONE' : 'COMPLETE'}
        </button>
        {taco.name}
        <button
          onClick={() => setEditItem(taco)}
          className="btn btn-info"
          type="button"
        >
          EDIT
        </button>
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
  setEditItem: PropTypes.func.isRequired,
};
