/* eslint-disable import/no-absolute-path */
import renderToDom from '../helpers/renderToDom';
// eslint-disable-next-line import/no-absolute-path
// eslint-disable-next-line import/no-unresolved
import vocabLogo from '/documentation/vocabLogo.png';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
  <img src="${vocabLogo}" width="30" height="30" alt="">
       </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" id="home" style= "color: hotpink" href="#">Home <span class="sr-only">(current)</span></a>
      <div id='newCard'>
      <a style= "color: hotpink" class="nav-item nav-link active" href="#" id= 'new-card'>New Card</a>
      </div>
      
      </div>
</nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
