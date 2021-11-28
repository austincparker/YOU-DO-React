import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { createTodo, updateTodo } from '../api/data/todoData';

const TodoStyle = styled.div`
  input {
    min-width: 400px;
    margin-right: 5px !important;
  }

  button:hover {
    color: whitesmoke;
  }
`;

const initialState = {
  name: '',
  complete: false,
  uid: '',
};

export default function TodoForm({
  obj,
  setTodos,
  setEditItem,
  uid,
}) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateTodo(formInput.firebaseKey, formInput).then((todos) => setTodos(todos));
      resetForm();
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    }
  };

  return (
    <div className="text-center">
      <h1 className="mt-5 display-1">YOU-DO</h1>
      <TodoStyle className="d-flex justify-content-center mt-2">
        <form id="todoForm" className="mb-3 d-flex align-items-center">
          <label htmlFor="name" className="me-1">
            <input
              name="name"
              id="name"
              value={formInput.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="ADD A YOU-DO"
            />
          </label>
          <Button color="success" type="submit" onClick={handleSubmit}>
            {obj.firebaseKey ? 'Update' : 'Submit'}
          </Button>
        </form>
      </TodoStyle>
    </div>
  );
}

TodoForm.propTypes = {
  uid: PropTypes.string.isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  obj: {},
};
