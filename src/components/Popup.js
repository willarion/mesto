export class Popup {

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._escapePopupClosing = this._escapePopupClosing.bind(this);
  }

  _escapePopupClosing(evt) {
    if (evt.key === "Escape") {
      this.closePopup(this._popupSelector);
    }
  }

  openPopup() {
    this._popup.classList.add('modal_visible');
    document.addEventListener('keydown', this._escapePopupClosing);
  }

  closePopup() {
    this._popup.classList.remove('modal_visible');
    document.removeEventListener('keydown', this._escapePopupClosing);
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__reset-btn')) 
      { 
        this.closePopup(this._popupSelector);
      }
    });
  }  
}