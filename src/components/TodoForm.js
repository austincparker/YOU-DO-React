import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';

const initialState = {
  name: '',
  complete: false,
  uid: '',
};

export default function TodoForm({ obj, setTodos }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid: obj.uid,
      });
    }
  }, [obj]);

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
    if (obj.firebaseKey) {
      // comment
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    }
  };

  return (
    <form id="todoForm" className=" d-flex justify-content-center mt-5 mb-3">
      <label htmlFor="name">
        Name
        <input
          name="name"
          id="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  obj: {},
};
