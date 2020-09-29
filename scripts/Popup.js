export class Popup {

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _getPopupElement() {
    const popup = document.querySelector(this._popupSelector);

    return popup;
  }

  _escapePopupClosing(evt) {
    if (evt.key === "Escape") {
      this.closePopup(this._popupSelector);
      document.removeEventListener('keydown', this._escapePopupClosing.bind(this));
    }
  }

  openPopup() {
    const popup = this._getPopupElement();
    popup.classList.add('modal_visible');
    document.addEventListener('keydown', this._escapePopupClosing.bind(this));
  }

  closePopup() {
    const popup = this._getPopupElement();
    popup.classList.remove('modal_visible');
  }

  setEventListeners() {
    const popup = this._getPopupElement(); 

    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__reset-btn')) 
      { 
        this.closePopup(this._popupSelector);
      }
    });
  }  
}