import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteCompletedTodo } from '../api/data/todoData';

const CompTodoStyle = styled.div`
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
  margin: 0 auto;
`;

export default function CompletedTodos({ completedTodo, setCompletedTodos, uid }) {
  const handleClick = () => {
    deleteCompletedTodo(completedTodo.firebaseKey, uid).then(setCompletedTodos);
  };

  return (
    <CompTodoStyle>
      <div
        className="d-flex justify-content-between alert alert-light"
        role="alert"
      >
        {completedTodo.name}
        <button onClick={handleClick} className="btn btn-danger" type="button">
          DELETE
        </button>
      </div>
    </CompTodoStyle>
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
  uid: PropTypes.string,
  setCompletedTodos: PropTypes.func.isRequired,
};

CompletedTodos.defaultProps = {
  uid: '',
};
