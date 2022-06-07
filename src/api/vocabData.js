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

export {
  getCards,
  deleteCard
};
