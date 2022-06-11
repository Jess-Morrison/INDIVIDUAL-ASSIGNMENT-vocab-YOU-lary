/* eslint-disable camelcase */

import showVocabCards from '../scripts/components/pages/showCards';
import { filterCard, getCards } from './vocabData';

// eslint-disable-next-line consistent-return
const filterStuff = () => {
  if (filterCard === 'Javascript') {
    return getCards().then(showVocabCards);
  }
};

export default filterStuff;
