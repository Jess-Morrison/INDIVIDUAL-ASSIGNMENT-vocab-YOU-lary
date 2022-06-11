import { deleteCard, filterCard, getSingleCard } from '../../api/vocabData';
import cardForm from '../components/forms/createCardForm';
import showVocabCards from '../components/pages/showCards';
// import showForm from './formEvents';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // Event for deleting card
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(uid, firebaseKey).then(showVocabCards);
      }
    }
    // Event for updating card
    if (e.target.id.includes('update-card')) {
      console.warn('EDIT CARD', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then(cardForm);
    }
    // Event for filtering cards by language
    if (e.target.id.includes('javascript')) {
      console.warn('btn clicked', e.target.id);
      filterCard('JavaScript' || 'Javascript').then(showVocabCards, uid);
    }
    if (e.target.id.includes('html')) {
      console.warn('btn clicked', e.target.id);
      filterCard('HTML', uid).then(showVocabCards);
    }
    if (e.target.id.includes('css')) {
      console.warn('btn clicked', e.target.id);
      filterCard('CSS', uid).then(showVocabCards);
      // eslint-disable-next-line new-cap
    }

    // Stretch Goal: When a user adds a new language, they can filter on it
  });
};

export default domEvents;
