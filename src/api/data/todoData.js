import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTodos = (value) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json?orderBy="complete"&equalTo=${value}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createTodo = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/todos/${firebaseKey}.json`, {
          firebaseKey,
          id: Math.floor(Math.random() * 1000),
        })
        .then(() => {
          getTodos(false).then(resolve);
        });
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  console.warn('clicked del');
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
});

const deleteCompletedTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getTodos(true).then(resolve))
    .catch(reject);
});

const updateTodo = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/todos/${firebaseKey}.json`, updateObj)
    .then(() => getTodos(false).then(resolve))
    .catch(reject);
  console.warn(updateObj);
});

export {
  getTodos, createTodo, deleteTodo, updateTodo, deleteCompletedTodo,
};
