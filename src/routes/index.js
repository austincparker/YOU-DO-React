import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Completed from '../views/Completed';
import Home from '../views/Home';
import All from '../views/All';

export default function Routes({
  uid,
}) {
  console.warn(uid);
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
        <Route exact path="/completed" component={() => <Completed />} />
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
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  uid: PropTypes.string.isRequired,
};
