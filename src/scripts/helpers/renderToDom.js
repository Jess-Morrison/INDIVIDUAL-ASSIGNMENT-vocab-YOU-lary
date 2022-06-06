// import { render } from "node-sass";

const renderToDom = (divId, renderContent) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = renderContent;
};

export default renderToDom;
