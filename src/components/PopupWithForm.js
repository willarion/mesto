import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {

  constructor(popupSelector, formSubmitCallback) {
    super(popupSelector);
    this._formSubmitCallback = formSubmitCallback;
    this._popupForm = (super._getPopupElement()).querySelector('.modal__container');
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
    
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._formSubmitCallback(this._getInputValues());
    });
  }

}
