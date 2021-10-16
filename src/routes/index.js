import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Completed from '../views/Completed';
import Home from '../views/Home';

export default function Routes({ todos, setTodos, setEditItem }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
          )}
        />
        <Route exact path="/completed" component={() => <Completed />} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
