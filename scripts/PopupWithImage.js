import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
  
  constructor(name, link, popupSelector) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  openPopup() {
    
    this._bigImagePopup = super._getPopupElement();
    this._bigImagePopup.querySelector('.modal__image').src = this._link;
    this._bigImagePopup.querySelector('.modal__caption').textContent = this._name;

    super.openPopup();
  }

}