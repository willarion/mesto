import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {Section} from './Section.js'
import {PopupWithImage} from './PopupWithImage.js'
import {PopupWithForm} from './PopupWithForm.js'
import {UserInfo} from './UserInfo.js'





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






//редактирование профиля
const userInfo = new UserInfo(userInfoSelectors);

const editProfilePopup = new PopupWithForm('.modal_type_edit-profile', (inputValues) => {

  userInfo.setUserInfo(inputValues);

  editProfilePopup.closePopup();
});

editProfilePopup.setEventListeners();


function editProfile() {
  editProfilePopup.openPopup();

  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  bioInput.value = userInfoObj.bio;
}

editProfileBtn.addEventListener('click', editProfile);





//добавление карточек
function renderer(cardData) {

  const newCard = new Card(cardData, '.card-template',  handleCardClick);

  const cardElement = newCard.createNewCard();
  return cardElement;
}


const section = new Section({items, renderer}, '.elements__list');
section.renderInitialCards();

const addCardPopup = new PopupWithForm('.modal_type_add-card', (inputValues) => {

  const cardInfo = {};
  cardInfo.name = inputValues.title;
  cardInfo.link = inputValues.link;
  
  section.addItem(section.renderer(cardInfo));
    
  addCardPopup.closePopup();
  }
);

addCardPopup.setEventListeners();

// модалка добавления новой карточки
addCardButton.addEventListener('click', () => {
  addCardPopup.openPopup();
  //отключение кнопки сохранить
  modalAddCardType.querySelector('.modal__container').reset();
  modalAddCardTypeSaveBtn.setAttribute('disabled', true);
  modalAddCardTypeSaveBtn.classList.add('modal__save-btn_disabled');
});

// открытие попапа с большой картинкой
function handleCardClick(name, link) {
  const bigImagePopup = new PopupWithImage(name, link, '.modal_type_big-image');
  bigImagePopup.setEventListeners();
  bigImagePopup.openPopup();
}





//валидация формы
const formSettingsObj = {
  inputSelector: '.modal__input-line',
  submitButtonSelector: '.modal__save-btn',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input-line_type_error',
  errorClass: 'modal__error_visible',
}

const addCardFormSelector = document.querySelector('.modal__add-card-form');
const editProfileFormSelector = document.querySelector('.modal__edit-profile-form');

const addCardFormValidator = new FormValidator(formSettingsObj, addCardFormSelector); 
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(formSettingsObj, editProfileFormSelector); 
editProfileFormValidator.enableValidation();