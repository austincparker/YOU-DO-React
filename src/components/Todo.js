import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteTodo, updateAllTodo, updateTodo } from '../api/data/todoData';

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

export default function Todo({ todo, setTodos, uid }) {
  const history = useHistory();
  const location = useLocation();
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(todo.firebaseKey, uid).then(setTodos);
    } else if (method === 'edit') {
      updateTodo(todo.firebaseKey, { name: '' }).then(setTodos);
    } else if ((method === 'complete') && (location.pathname === '/')) {
      updateTodo(todo.firebaseKey, { complete: !todo.complete }, uid).then(setTodos);
    } else if ((method === 'complete') && (location.pathname === '/all')) {
      updateAllTodo(todo.firebaseKey, { complete: !todo.complete }, uid).then(setTodos);
    } else if ((method === 'uncomplete') && (location.pathname === '/')) {
      updateTodo(todo.firebaseKey, { complete: !todo.complete }, uid).then(setTodos);
    } else if ((method === 'uncomplete') && (location.pathname === '/all')) {
      updateAllTodo(todo.firebaseKey, { complete: !todo.complete }, uid).then(setTodos);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <TodoStyle
        className="d-flex justify-content-between alert alert-light todo-comp"
        role="alert"
      >
        {todo.complete ? (
          <Button
            color="success"
            onClick={() => handleClick('uncomplete')}
            type="button"
          >
            <i className="fas fa-check-square" />

          </Button>
        ) : (
          <Button
            color="success"
            onClick={() => handleClick('complete')}
            type="button"
          >
            <i className="fas fa-square" />
          </Button>
        )}
        <div className="d-flex align-items-center">{todo.name}</div>
        <div>
          {!todo.complete && (
            <Button
              color="info"
              onClick={() => history.push(`/edit/${todo.firebaseKey}`)}
              type="button"
              className="me-1"
            >
              EDIT
            </Button>
          )}
          <Button
            onClick={() => handleClick('delete')}
            color="danger"
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
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    firebaseKey: PropTypes.string,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func,
  uid: PropTypes.string,
};

Todo.defaultProps = {
  setTodos: () => {},
  uid: '',
};
