import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
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

export default function AllTodos({ todo, setTodos, uid }) {
  const history = useHistory();
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(todo.firebaseKey).then(setTodos);
    } else if (method === 'edit') {
      updateTodo(todo.firebaseKey, { name: '' }).then(setTodos);
    } else {
      updateTodo(todo.firebaseKey, { complete: !todo.complete }, uid).then(setTodos);
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
          {todo.complete ? (
            <i className="fas fa-check-square" />
          ) : (
            <i className="fas fa-square" />
          )}
        </Button>
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

AllTodos.propTypes = {
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

AllTodos.defaultProps = {
  setTodos: () => {},
  uid: '',
};
