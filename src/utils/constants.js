const editProfileBtn = document.querySelector('.profile__edit-btn');
const editAvatarBtn = document.querySelector('.profile__edit-avatar-btn');
const addCardButton = document.querySelector('.profile__add-btn');
const modalAddCardType = document.querySelector('.modal_type_add-card');
const modalAddCardTypeSaveBtn = modalAddCardType.querySelector('.modal__save-btn');
const addCardFormSelector = document.querySelector('.modal__add-card-form');
const editProfileFormSelector = document.querySelector('.modal__edit-profile-form');
const editAvatarFormSelector = document.querySelector('.modal__edit-avatar-form');

const nameInput = document.querySelector('.modal__name');
const bioInput = document.querySelector('.modal__bio');

const avatar = document.querySelector('.profile__avatar');

const errorText = document.querySelector('.modal_type_error-alert').querySelector('.modal__title');

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

const formSettingsObj = {
  inputSelector: '.modal__input-line',
  submitButtonSelector: '.modal__save-btn',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input-line_type_error',
  errorClass: 'modal__error_visible',
}

const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: 'fd3bf28b-131d-4028-93e3-e0966938f828',
    'Content-Type': 'application/json'
  }
}

export {editProfileBtn, editAvatarBtn, addCardButton, modalAddCardType, modalAddCardTypeSaveBtn, addCardFormSelector, editProfileFormSelector, nameInput, bioInput, avatar, items, userInfoSelectors, formSettingsObj, editAvatarFormSelector, apiSettings, errorText};