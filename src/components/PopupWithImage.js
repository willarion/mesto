import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
    this._bigImagePopup = super._getPopupElement();
    this._popupImage = this._bigImagePopup.querySelector('.modal__image');
    this._popupCaption = this._bigImagePopup.querySelector('.modal__caption');
  }

  openPopup(name, link) {
    this._popupImage .src = link;
    this._popupCaption.textContent = name;

    super.openPopup();
  }

}