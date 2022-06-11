import showVocabCards from '../components/pages/showCards';
import {
  createCard, getSingleCard, updateCard, getCards
} from '../../api/vocabData';

const showForm = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardInput = {
        word: document.querySelector('#wordName').value,
        tech_name: document.querySelector('#lanaguageSelection').value,
        definition: document.querySelector('#word-definition').value,
        uid
      };
      console.warn('CLICKED SUBMIT BOOK', e.target.id);
      createCard(cardInput, uid).then(() => getCards(uid).then(showVocabCards, uid));
      // document.querySelector('#new-card').addEventListener('click', () => {
      //   createCard(cardInput).then(showVocabCards);
      //   console.warn('You clicked new card');
      // });
    }
    if (e.target.id.includes('update-card')) {
      getSingleCard(uid).then(() => {
        const [, firebaseKey] = e.target.id.split('--');
        const updateInput = {
          word: document.querySelector('#wordName').value,
          tech_name: document.querySelector('#lanaguageSelection').value,
          definition: document.querySelector('#word-definition').value,
          uid,
          firebaseKey,
          time_entry: new Date()
        };
        updateCard(updateInput, uid).then(() => getCards(uid).then(showVocabCards, uid));
      });
    }
  });
};

export default showForm;
