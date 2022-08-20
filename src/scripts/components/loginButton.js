import signIn from '../helpers/auth/signIn';
import renderToDom from '../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  // document.querySelector('#login-form-container').innerHTML = domString;
  renderToDom('#login-form-container', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
