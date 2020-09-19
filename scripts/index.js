import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'


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

const cardImage = document.querySelector('.card-template').content.querySelector('.element__image');

const modalBigImage = document.querySelector('.modal_type_big-image');


const initialCards = [
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

const cardList = document.querySelector('.elements__list'); 

//работа модальных окон
function openModal (modalType) {
  modalType.classList.add('modal_visible');
}

function editProfile() {
  openModal(modal);
  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
}

function closeModal(modalType) {
  modalType.classList.remove('modal_visible');
}

function modalClosing() {
  const modalsList = Array.from(document.querySelectorAll('.modal'));
  modalsList.forEach((modalItem) => {
    modalItem.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__reset-btn')) {
        closeModal(modalItem);
      }
    });
    document.addEventListener('keydown', (evt) => {
      if (evt.key === "Escape") {
        closeModal(modalItem);
      }
    });
  });
}


//работа кнопки "сохранить" для редактирования профиля
function formSubmitHandler (evt) { 
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  closeModal(modal);
}


editProfileBtn.addEventListener('click', editProfile);
editProfileFormElement.addEventListener('submit', formSubmitHandler);

addCardButton.addEventListener('click', () => {
  openModal(modalAddCardType);
  //отключение кнопки сохранить
  modalAddCardType.querySelector('.modal__container').reset();
  modalAddCardTypeSaveBtn.setAttribute('disabled', true);
  modalAddCardTypeSaveBtn.classList.add('modal__save-btn_disabled');
});

modalAddCardTypeForm.addEventListener('submit', saveNewCardHandler);

modalClosing();


//добавление карточек
function renderCard(card) {
  cardList.prepend(card);
}

initialCards.forEach((data) => {
  
  const card = new Card(data, '.card-template', openModal, modalBigImage, cardImage);
  const cardElement = card.createNewCard();

  renderCard(cardElement);
});

function saveNewCardHandler(evt) {
  evt.preventDefault();

  const cardInfo = {name: placeTitle.value, link: imageURL.value};
  const newCard = new Card(cardInfo, '.card-template', openModal, modalBigImage, cardImage);
  const cardElement = newCard.createNewCard();

  renderCard(cardElement);
  
  closeModal(modalAddCardType);
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