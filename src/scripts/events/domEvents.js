import { deleteCard } from '../../api/vocabData';
import showVocabCards from '../components/pages/showCards';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // Event for deleting card
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then(showVocabCards);
      }
    }
  });
};

export default domEvents;
