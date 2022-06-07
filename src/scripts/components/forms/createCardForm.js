import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const cardForm = (obj = {}) => {
  clearDom();
  const domString = `<form id=" ${obj.firebaseKey ? `update-card--${obj.firebaseKey}`
    : 'submit-card'}">
  <div class="form-group">
    <label for="wordName">Word:</label>
    <input type="wordName" class="form-control" id="wordName" placeholder="String">
  </div>
  <div class="form-group">
    <label for="lanaguageSelection">Language:</label>
    <select multiple class="form-control" id="lanaguageSelection">
      <option>JavaScript</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
  </div>
  <div class="word-definition">
    <label for="word-definition">Definition:</label>
    <textarea class="form-control" id="word-definition" rows="3"></textarea>
  </div>
</form>`;
  renderToDom('#form-container', domString);
};

export default cardForm;
