import { getCards } from '../../api/vocabData';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import showVocabCards from '../components/pages/showCards';
import domEvents from '../events/domEvents';
import showForm from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  showForm();
  domEvents();
  navEvents();
  getCards().then((vocabArray) => showVocabCards(vocabArray));
};

export default startApp;
