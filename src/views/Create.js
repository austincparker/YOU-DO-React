import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from '../components/TodoForm';

export default function Create({ uid }) {
  return (
    <div>
      <h1>Create</h1>
      <TodoForm uid={uid} />
    </div>
  );
}

Create.propTypes = {
  uid: PropTypes.string,
};

Create.defaultProps = {
  uid: '',
};
