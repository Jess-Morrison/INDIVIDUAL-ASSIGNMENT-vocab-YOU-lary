// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>WELCOME TO vocab-YOU-lary!!</h1>
   
  `;
  checkLoginStatus();
};

init();
