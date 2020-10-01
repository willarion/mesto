import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {

  constructor(popupSelector, formSubmitCallback) {
    super(popupSelector);
    this.formSubmitCallback = formSubmitCallback;
  }

  _getInputValues() {
    const inputList = Array.from((super._getPopupElement()).querySelectorAll('.modal__input-line'));

    const inputValues = {};
    inputList.forEach((item) => {
      inputValues[item.name] = item.value;
      return inputValues;
    });
    return inputValues;
  }

  closePopup() {
    const inputs = Array.from(this._getInputValues);

    inputs.forEach((input) => {
      input.value = '';
    });
    super.closePopup();
  }

  setEventListeners() {
    super.setEventListeners(); 
    const form = (super._getPopupElement()).querySelector('.modal__container');
    
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this.formSubmitCallback(this._getInputValues());
    });
  }

  

}
