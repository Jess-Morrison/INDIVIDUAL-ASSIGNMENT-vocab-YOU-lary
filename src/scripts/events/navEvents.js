import signOut from '../helpers/auth/signOut';
import cardForm from '../components/forms/createCardForm';

const navEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // Show Form via "New Card"
  document.querySelector('#newCard').addEventListener('click', cardForm);
  //  if (e.target.includes('newCard')) {
  //    const [, firebaseKey]
  //  }
};

export default navEvents;
