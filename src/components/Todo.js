import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { deleteTodo, updateTodo } from '../api/data/todoData';

const TodoStyle = styled.div`
  color: black;
  border: 2px darkgrey solid;
  border-radius: 10px;
  max-width: 666px;
  button {
    color: whitesmoke;
  }
  button:hover {
    color: lightgrey;
  }
`;

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
      <TodoStyle
        className="d-flex justify-content-between alert alert-light todo-comp"
        role="alert"
      >
        <Button
          color="success"
          onClick={() => handleClick('complete')}
          type="button"
        >
          {taco.complete ? (
            <i className="fas fa-check-square" />
          ) : (
            <i className="fas fa-square" />
          )}
        </Button>
        {taco.name}
        <div>
          <Button color="info" onClick={() => setEditItem(taco)} type="button">
            EDIT
          </Button>
          <Button
            onClick={() => handleClick('delete')}
            className="btn btn-danger"
            type="button"
          >
            DELETE
          </Button>
        </div>
      </TodoStyle>
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
