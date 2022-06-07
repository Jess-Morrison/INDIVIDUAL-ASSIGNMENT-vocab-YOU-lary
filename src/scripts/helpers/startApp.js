import getCards from '../../api/vocabData';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import showVocabCards from '../components/pages/showCards';

const startApp = () => {
  domBuilder();
  logoutButton();

  getCards().then((vocabArray) => showVocabCards(vocabArray));
};

export default startApp;
