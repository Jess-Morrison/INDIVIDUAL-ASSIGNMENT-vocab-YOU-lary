import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id='main-container'>
  <div id="navigation"></div>
  <button id="Javascript" type="button" style="Background-color:RED">Javascript</button>
  <button id="HTML" type="button"  style="Background-color:BLUE">HTML</button>
  <button id="CSS" type="button"  style="Background-color:PURPLE">CSS</button>
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id= 'view' ></div>
  <div id="view"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
