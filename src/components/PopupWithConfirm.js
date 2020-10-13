import {Popup} from './Popup.js'

export class PopupWithConfirm extends Popup {

  constructor(popupSelector, confirmSubmitCallback) {
    super(popupSelector);
    this._confirmSubmitCallback = confirmSubmitCallback;
    this._submitBtn = document.querySelector(popupSelector).querySelector('.modal__save-btn');
  }

  openPopup(submitBtnValue) {
    this._submitBtn.value = submitBtnValue;
    super.openPopup();
  }

  setEventListeners() {
    super.setEventListeners(); 
    
    this._submitBtn.addEventListener('click', (evt) => {
      evt.preventDefault();

      this._confirmSubmitCallback();
      
      super.closePopup();
    });
  }
}
