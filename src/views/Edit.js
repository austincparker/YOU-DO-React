import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleTodo } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';

export default function Edit({ uid }) {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleTodo(key).then(setEditItem);
  }, []);

  return (
    <div>
      <TodoForm editItem={editItem} uid={uid} />
    </div>
  );
}

Edit.propTypes = {
  uid: PropTypes.string,
};

Edit.defaultProps = {
  uid: '',
};
