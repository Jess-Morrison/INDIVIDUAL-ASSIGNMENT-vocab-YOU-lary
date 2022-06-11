import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// see cards
const getCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabs.json`)
    .then((response) => resolve(Object.values(response.data)))
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

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabs.json`, cardObj)
    .then((response) => {
      const payLoad = {
        firebaseKey: response.data.name
      };
      axios.patch(`${dbUrl}/vocabs/${response.data.name}.json`, payLoad)
        .then(() => {
          getCards(cardObj).then(resolve);
        });
    }).catch(reject);
});

// Get card by Tech Name
// eslint-disable-next-line camelcase
const filterCard = (tech_name) => new Promise((resolve, reject) => {
  // eslint-disable-next-line camelcase
  axios.get(`${dbUrl}/vocabs.json?orderBy="tech_name"&equalTo="${tech_name}"`)
    .then((response) => resolve(Object.values(response.filter('javascript'))))
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
    .then(() => getCards().then(resolve))
    .catch((error) => reject(error));
});

export {
  getCards,
  deleteCard,
  createCard,
  filterCard,
  getSingleCard,
  updateCard
};
