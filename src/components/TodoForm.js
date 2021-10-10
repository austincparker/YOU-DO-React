import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';

export default function TodoForm({ obj }) {
  const [formInput, setFormInput] = useState({
    name: obj?.name || '',
    id: obj?.id || '',
  });

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(formInput);
    setFormInput({
      name: '',
    });
  };

  return (
    <form id="todoForm">
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
    id: PropTypes.number,
  }),
  //   add: PropTypes.function.isRequired,
  //   update: PropTypes.function.isRequired,
};

TodoForm.defaultProps = { obj: {} };
