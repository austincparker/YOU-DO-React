import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTodos = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// const getAllTodos = (uid) => new Promise((resolve, reject) => {
//   axios
//     .get(`${baseURL}/todos.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

const createTodo = (obj, uid) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/todos/${firebaseKey}.json`, {
          firebaseKey,
          uid,
        })
        .then(() => {
          getTodos(uid).then(resolve);
        });
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey, uid) => new Promise((resolve, reject) => {
  console.warn('clicked del');
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getTodos(uid).then(resolve))
    .catch(reject);
});

const deleteCompletedTodo = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getTodos(uid).then(resolve))
    .catch(reject);
});

const updateTodo = (firebaseKey, updateObj, uid) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/todos/${firebaseKey}.json`, updateObj)
    .then(() => getTodos(uid).then(resolve))
    .catch(reject);
});

const updateAllTodo = (firebaseKey, updateObj, uid) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/todos/${firebaseKey}.json`, updateObj)
    .then(() => getTodos(uid).then(resolve))
    .catch(reject);
});

const getSingleTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

export {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  deleteCompletedTodo,
  getSingleTodo,
  updateAllTodo,
};
