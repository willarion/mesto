import {Popup} from './Popup.js'

export class PopupWithConfirm extends Popup {

  constructor(popupSelector, confirmSubmitCallback) {
    super(popupSelector);
    this._confirmSubmitCallback = confirmSubmitCallback;
    this._popupBtn= document.querySelector(popupSelector).querySelector('.modal__save-btn');
  }

  setEventListeners() {
    super.setEventListeners(); 
    
    this._popupBtn.addEventListener('click', (evt) => {
      evt.preventDefault();

      this._confirmSubmitCallback();
      
      super.closePopup();
    });
  }
}
