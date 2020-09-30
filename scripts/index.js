import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {Section} from './Section.js'
import {Popup} from './Popup.js'
import {PopupWithImage} from './PopupWithImage.js'


const editProfileBtn = document.querySelector('.profile__edit-btn');
const modal = document.querySelector('.modal_type_edit-profile');

const editProfileFormElement = document.querySelector('.modal__edit-profile-form');
const nameInput = document.querySelector('.modal__name');
const bioInput = document.querySelector('.modal__bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');

const addCardButton = document.querySelector('.profile__add-btn');
const modalAddCardType = document.querySelector('.modal_type_add-card');
const modalAddCardTypeSaveBtn = modalAddCardType.querySelector('.modal__save-btn');
const placeTitle = modalAddCardType.querySelector('.modal__place-title');
const imageURL = modalAddCardType.querySelector('.modal__image-url');
const modalAddCardTypeForm = modalAddCardType.querySelector('.modal__container');


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


//работа модальных окон 
const editProfilePopup = new Popup('.modal_type_edit-profile');
editProfilePopup.setEventListeners();

const addCardPopup = new Popup('.modal_type_add-card');
addCardPopup.setEventListeners();


//редактирование профиля
function editProfile() {
  editProfilePopup.openPopup(modal);
  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
}

//работа кнопки "сохранить" для редактирования профиля
function formSubmitHandler (evt) { 
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  editProfilePopup.closePopup(modal);
}

editProfileBtn.addEventListener('click', editProfile);
editProfileFormElement.addEventListener('submit', formSubmitHandler);


// модалка добавления новой карточки
addCardButton.addEventListener('click', () => {
  addCardPopup.openPopup(modalAddCardType);
  //отключение кнопки сохранить
  modalAddCardType.querySelector('.modal__container').reset();
  modalAddCardTypeSaveBtn.setAttribute('disabled', true);
  modalAddCardTypeSaveBtn.classList.add('modal__save-btn_disabled');
});

modalAddCardTypeForm.addEventListener('submit', saveNewCardHandler);


// открытие попапа с большой картинкой
function handleCardClick(name, link) {
  const bigImagePopup = new PopupWithImage(name, link, '.modal_type_big-image');
  bigImagePopup.setEventListeners();
  bigImagePopup.openPopup();
}





//добавление карточек
function renderer(cardData) {

  const newCard = new Card(cardData, '.card-template',  handleCardClick);

  const cardElement = newCard.createNewCard();
  return cardElement;
}


const section = new Section({items, renderer}, '.elements__list');
section.renderInitialCards();


function saveNewCardHandler(evt) {
  evt.preventDefault();

  const cardInfo = {name: placeTitle.value, link: imageURL.value};  
  section.addItem(section.renderer(cardInfo));
    
  addCardPopup.closePopup(modalAddCardType);
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