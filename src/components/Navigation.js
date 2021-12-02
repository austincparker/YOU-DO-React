import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();

  return (
    <div className="text-center mb-3">
      <ButtonGroup size="lg">
        <Button
          onClick={() => history.push('/')}
          color="light"
        >
          Home
        </Button>
        <Button
          onClick={() => history.push('/completed')}
          color="light"
        >
          View Completed
        </Button>
        <Button
          onClick={() => history.push('/all')}
          color="light"
        >
          All
        </Button>
        <Button
          onClick={signOutUser}
          color="danger"
        >
          Log Out
        </Button>
      </ButtonGroup>
    </div>
  );
}
