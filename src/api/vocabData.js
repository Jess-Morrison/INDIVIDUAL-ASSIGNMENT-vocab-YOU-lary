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

export {
  getCards,
  deleteCard,
  createCard
};
