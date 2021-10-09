import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Todo({ taco }) {
  return (
    <>
      <Alert color="light">
        <button className="btn btn-success" type="button">
          COMPLETE
        </button>
        {taco.name}
        <button className="btn btn-danger" type="button">
          DELETE
        </button>
      </Alert>
    </>
  );
}

Todo.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
