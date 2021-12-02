import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Completed from '../views/Completed';
import Home from '../views/Home';
import Edit from '../views/Edit';
import All from '../views/All';

export default function Routes({
  uid,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              uid={uid}
            />
          )}
        />
        <Route exact path="/completed" component={() => <Completed uid={uid} />} />
        {/* <Route path="*" component={NotFound} /> */}
        <Route
          exact
          path="/all"
          component={() => (
            <All
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

Routes.propTypes = {
  uid: PropTypes.string,
};

Routes.defaultProps = {
  uid: '',
};
