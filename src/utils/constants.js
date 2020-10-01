const editProfileBtn = document.querySelector('.profile__edit-btn');
const addCardButton = document.querySelector('.profile__add-btn');
const modalAddCardType = document.querySelector('.modal_type_add-card');
const modalAddCardTypeSaveBtn = modalAddCardType.querySelector('.modal__save-btn');

const nameInput = document.querySelector('.modal__name');
const bioInput = document.querySelector('.modal__bio');

const items = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const userInfoSelectors = {
  nameSelector: '.profile__name',
  bioSelector: '.profile__bio'
}

export {editProfileBtn, addCardButton, modalAddCardType, modalAddCardTypeSaveBtn, nameInput, bioInput, items, userInfoSelectors};