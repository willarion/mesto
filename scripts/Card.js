
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
    this._cardImage = this._cardElement.querySelector('.element__image');

    this._cardElement.querySelector('.element__text').textContent = this._name;
    this._cardImage.src = this._link;

    if (/[а-я]/i.test(this._name)) {
      this._cardImage.alt = this._name;
    } else {this._cardImage.alt = 'место';}

    this._likeCardSetEventListeners();
    this._deleteCardSetEventListeners();
    this._openBigImageSetEventListeners(this._cardImage);

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

  _openBigImageSetEventListeners(image) {
   image.addEventListener('click', () => {this._openBigImage()});
  }
  _openBigImage() {
    this._modalBigImage.querySelector('.modal__image').src = this._link;
    this._modalBigImage.querySelector('.modal__caption').textContent = this._name;

    this._openModal(this._modalBigImage);
  }
}


export {Card};