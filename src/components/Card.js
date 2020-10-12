export class Card {
  
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content; 
    const cardElement = cardTemplate.cloneNode(true);

    return cardElement;
  }
  
  createNewCard(isCardCreatedByUser){
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');

    if (isCardCreatedByUser) {
      this._cardElement.querySelector('.element__delete-btn').classList.add('element__delete-btn_visible');
    }

    this._cardElement.querySelector('.element__text').textContent = this._name;
    this._cardImage.src = this._link;

    if (/[а-я]/i.test(this._name)) {
      this._cardImage.alt = this._name;
    } else {this._cardImage.alt = 'место';}

    this._setEventListeners(this._cardImage);

    return this._cardElement;
  }

  _likeCard (evt) {
    const eventTarget = evt.target; 
    eventTarget.classList.toggle('element__like_is-liked');
  }

  _deleteCard(evt) {
    evt.target.closest('.card-element').remove();
  }

  _setEventListeners(image) {
    this._cardElement.querySelector('.element__like').addEventListener('click', (evt) => {this._likeCard (evt)});

    this._cardElement.querySelector('.element__delete-btn').addEventListener('click', (evt) => {this._deleteCard (evt)});
    
    image.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});
  }
}


