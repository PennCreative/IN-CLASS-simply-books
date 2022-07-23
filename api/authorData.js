import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/author.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// FIXME: CREATE AUTHOR
const createAuthor = (authorObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/author.json`, authorObj)
    .then((response) => {
      // Remember to pass in a payload
      const authPayload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/author/${authPayload.firebaseKey}.json`, authPayload)
        .then(() => {
          getAuthors(authorObj, uid).then(resolve);
        });
    }).catch(reject);
});

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/author/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/author/${firebaseKey}.json`)
    .then(() => {
      getAuthors(uid).then((authorsArray) => resolve(authorsArray));
    })
    .catch((error) => reject(error));
});

// FIXME: UPDATE AUTHOR
const updateAuthor = (authorObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/author/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors(uid).then(resolve))
    .catch((error) => reject(error));
});

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
};
