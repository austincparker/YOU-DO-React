import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getTodos;
