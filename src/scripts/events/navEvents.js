import { getCards } from '../../api/vocabData';
import cardForm from '../components/forms/createCardForm';
import showVocabCards from '../components/pages/showCards';
// import showVocabCards from '../components/pages/showCards';

const navEvents = (cardObj) => {
  // document.querySelector('#logout-button')
  //   .addEventListener('click', signOut);

  // Show Form via "New Card"
  document.querySelector('#new-card').addEventListener('click', cardForm);
  //  if (e.target.includes('newCard')) {
  //    const [, firebaseKey]
  //  }
  // Return to Home screen
  document.querySelector('#home').addEventListener('click', () => {
    getCards(cardObj.uid).then(showVocabCards);
  });
};

export default navEvents;
