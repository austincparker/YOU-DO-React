import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { getTodos } from '../api/data/todoData';
import 'firebase/auth';
import TodoForm from '../components/TodoForm';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // do something
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getTodos().then(setTodos);
      } else if (user || user === null) {
        // do something else
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Navigation />
          <TodoForm
            obj={editItem}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
          <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Initialize;
