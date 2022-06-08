import { createCard } from '../../api/vocabData';
import showVocabCards from '../components/pages/showCards';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
  // Event for showing form
    if (e.target.id.includes('newCard')) {
      console.warn('New card clicked');
      // eslint-disable-next-line no-alert
      const [, firebaseKey] = e.target.id.split('--');
      createCard(firebaseKey).then(showVocabCards);
    }
  });
};

export default navEvents;
