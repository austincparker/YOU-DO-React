import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
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
  uid,
  editItem,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (editItem.firebaseKey) {
      setFormInput(editItem);
    } else {
      setFormInput(initialState);
    }
  }, [editItem]);

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem.firebaseKey) {
      updateTodo(formInput.firebaseKey, formInput, uid).then(() => history.push('/'));
      resetForm();
    } else {
      console.warn(uid);
      createTodo({ ...formInput, date: new Date() }, uid).then(() => {
        history.push('/');
      });
      resetForm();
    }
  };

  return (
    <div className="text-center">
      <h1 className="mt-5 display-1">YOU-DO</h1>
      <TodoStyle className="d-flex justify-content-center mt-2">
        <form
          id="todoForm"
          className="mb-3 d-flex align-items-center"
          onSubmit={handleSubmit}
        >
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
          <Button color="success" type="submit">
            {editItem.firebaseKey ? 'Update' : 'Submit'}
          </Button>
        </form>
      </TodoStyle>
    </div>
  );
}

TodoForm.propTypes = {
  uid: PropTypes.string,
  editItem: PropTypes.shape(PropTypes.obj),
};

TodoForm.defaultProps = {
  editItem: {},
  uid: '',
};
