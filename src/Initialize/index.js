import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getTodos } from '../api/data/todoData';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});
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
        getTodos(false).then(setTodos);
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
          <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} uid={user.uid} />
          <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} uid={user.uid} />
        </>
      ) : (
        <SignIn />
      )
}

    </div>
  );
}

export default Initialize;
