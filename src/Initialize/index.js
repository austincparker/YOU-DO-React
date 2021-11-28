import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';
import FormRoutes from '../routes/FormRoutes';

function Initialize() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        // do something
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
        // do something else
      }
    });
  }, []);

  return (
    <div>
      {
      user ? (
        <>
          <Navigation />
          <FormRoutes
            uid={user.uid}
          />
          <Routes
            uid={user.uid}
          />
        </>
      ) : (
        <SignIn />
      )
}

    </div>
  );
}

export default Initialize;
