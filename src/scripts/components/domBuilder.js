import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
  <div id="navigation"></div>
  <button id="javascript" type="button" style="Background-color:RED">Javascript</button>
  <button id="html" type="button"  style="Background-color:BLUE">HTML</button>
  <button id="css" type="button"  style="Background-color:PURPLE">CSS</button>
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="store"></div>
  <div id="view" ></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
