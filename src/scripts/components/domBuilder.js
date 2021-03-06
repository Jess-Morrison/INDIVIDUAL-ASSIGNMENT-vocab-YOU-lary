import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
  <div id="navigation"></div>
  <button id="javascript" type="button" style="background-color: #e7e7e7; color: black;">Javascript</button>
  <button id="html" type="button"  style="background-color: #e7e7e7; color: black;">HTML</button>
  <button id="css" type="button"  style="background-color: #e7e7e7; color: black;">CSS</button>
  <div id="login-form-container"></div>
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="store"></div>
  <div id="view" ></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
