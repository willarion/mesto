
class Card {
  
  constructor(data, cardSelector, openModal, modalBigImage) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openModal = openModal;
    this._modalBigImage = modalBigImage;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content; 
    const cardElement = cardTemplate.cloneNode(true);

    return cardElement;
  }
  
  createNewCard(){
    this._cardElement = this._getTemplate();

    this._cardElement.querySelector('.element__text').textContent = this._name;
    this._cardElement.querySelector('.element__image').src = this._link;

    this._likeCardSetEventListeners();
    this._deleteCardSetEventListeners();
    this._openBigImageSetEventListeners();

    return this._cardElement;
  }

  _likeCardSetEventListeners() {
    this._cardElement.querySelector('.element__like').addEventListener('click', (evt) => {this._likeCard (evt)});
  }
  _likeCard (evt) {
    const eventTarget = evt.target; 
    eventTarget.classList.toggle('element__like_is-liked');
  }

  _deleteCardSetEventListeners() {
    this._cardElement.querySelector('.element__delete-btn').addEventListener('click', (evt) => {this._deleteCard (evt)});
  }
  _deleteCard(evt) {
    evt.target.closest('.card-element').remove();
  }

  _openBigImageSetEventListeners() {
    this._cardElement.querySelector('.element__image').addEventListener('click', () => {this._openBigImage()});
  }
  _openBigImage() {
    document.querySelector('.modal_type_big-image').querySelector('.modal__image').src = this._link;
    document.querySelector('.modal_type_big-image').querySelector('.modal__caption').textContent = this._name;

    this._openModal(this._modalBigImage);
  }
}


export {Card};