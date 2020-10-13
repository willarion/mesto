import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {

  constructor(popupSelector, formSubmitCallback) {
    super(popupSelector);
    this._formSubmitCallback = formSubmitCallback;
    this._popupWithForm = document.querySelector(popupSelector);
    this._submitBtn = this._popupWithForm.querySelector('.modal__save-btn');
    this._popupForm = this._popup.querySelector('.modal__container');
  }

  _getInputValues() {
    const inputList = Array.from(this._popupWithForm.querySelectorAll('.modal__input-line'));

    const inputValues = {};
    inputList.forEach((item) => {
      inputValues[item.name] = item.value;
      return inputValues;
    });
    return inputValues;
  }

  openPopup(submitBtnValue) {
    this._submitBtn.value = submitBtnValue;
    super.openPopup();
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

      this._formSubmitCallback(this._getInputValues(), this._submitBtn);
    });
  }

}
