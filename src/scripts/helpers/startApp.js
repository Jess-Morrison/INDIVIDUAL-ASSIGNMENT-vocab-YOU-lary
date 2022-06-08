import { getCards } from '../../api/vocabData';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import showVocabCards from '../components/pages/showCards';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  getCards().then((vocabArray) => showVocabCards(vocabArray));
  domEvents();
  navEvents();
};

export default startApp;
