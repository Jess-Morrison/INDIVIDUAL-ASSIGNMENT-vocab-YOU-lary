import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// see cards
const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// delete card

const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabs/${firebaseKey}.json`)
    .then(() => {
      getCards().then((cardsArray) => resolve(cardsArray));
    })
    .catch((error) => reject(error));
});

// create card

const createCard = (cardObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabs.json`, cardObj)
    .then((response) => {
      const payLoad = {
        firebaseKey: response.data.name,
        time_entry: new Date(),
        uid: response.data.uid
      };
      axios.patch(`${dbUrl}/vocabs/${response.data.name}.json`, payLoad)
        .then(() => {
          getCards(cardObj, uid).then(resolve);
        });
    }).catch(reject);
});

// Get card by Tech Name
// eslint-disable-next-line camelcase
const filterCard = (tech_name) => new Promise((resolve, reject) => {
  // eslint-disable-next-line camelcase
  axios.get(`${dbUrl}/vocabs.json?orderBy="tech_name"&equalTo="${tech_name}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Filter cards by time entered any language
// eslint-disable-next-line camelcase
const timeFilter = (time_entry) => new Promise((resolve, reject) => {
  // eslint-disable-next-line camelcase
  axios.get(`${dbUrl}/vocabs.json?orderBy="time_entry"&equalTo="${time_entry}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// Filter cards by time entered by language
// eslint-disable-next-line camelcase
const timeLangFilter = (time_entry, tech_name) => new Promise((resolve, reject) => {
  // eslint-disable-next-line camelcase
  axios.get(`${dbUrl}/vocabs.json?orderBy="time_entry"&equalTo="${time_entry}"&orderBy="tech_name"&equalTo="${tech_name}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get Single Card
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabs/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Update Card

const updateCard = (cardObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabs/${cardObject.firebaseKey}.json`, cardObject)
    .then(() => getCards(cardObject).then(resolve))
    .catch((error) => reject(error));
});

export {
  getCards,
  deleteCard,
  createCard,
  filterCard,
  getSingleCard,
  updateCard,
  timeFilter,
  timeLangFilter
};
