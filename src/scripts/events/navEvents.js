import cardForm from '../components/forms/createCardForm';

const navEvents = () => {
  // document.querySelector('#logout-button')
  //   .addEventListener('click', signOut);

  // Show Form via "New Card"
  document.querySelector('#new-card').addEventListener('click', cardForm);
  //  if (e.target.includes('newCard')) {
  //    const [, firebaseKey]
  //  }
  // Return to Home screen
};

export default navEvents;
