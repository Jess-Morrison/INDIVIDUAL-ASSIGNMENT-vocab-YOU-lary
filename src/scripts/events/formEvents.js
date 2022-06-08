import showVocabCards from '../components/pages/showCards';
import { createCard } from '../../api/vocabData';

const showForm = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardInput = {
        word: document.querySelector('#wordName').value,
        tech_name: document.querySelector('#lanaguageSelection').value,
        definition: document.querySelector('#word-definition').value
      };
      createCard(cardInput).then(showVocabCards);
      // document.querySelector('#new-card').addEventListener('click', () => {
      //   createCard(cardInput).then(showVocabCards);
      //   console.warn('You clicked new card');
      // });
    }
  });
};

export default showForm;
