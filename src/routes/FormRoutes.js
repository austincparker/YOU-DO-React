import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Create from '../views/Create';
import Edit from '../views/Edit';

export default function FormRoutes({ uid }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Create
              uid={uid}
            />
          )}
        />
        <Route
          exact
          path="/edit/:key"
          component={() => (
            <Edit
              uid={uid}
            />
          )}
        />
      </Switch>
    </div>
  );
}

FormRoutes.propTypes = {
  uid: PropTypes.string.isRequired,
};
