import { deleteCard, filterCard, getSingleCard } from '../../api/vocabData';
import cardForm from '../components/forms/createCardForm';
import showVocabCards from '../components/pages/showCards';
// import showForm from './formEvents';

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
    if (e.target.id.includes('update-card')) {
      console.warn('EDIT CARD', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then(cardForm);
    }

    if (e.target.id.includes('javascript')) {
      console.warn('btn clicked', e.target.id);
      filterCard().then(showVocabCards);
    }
  });
};

export default domEvents;
