import {editProfileBtn, editAvatarBtn, addCardButton, modalAddCardType, modalAddCardTypeSaveBtn, addCardFormSelector, editProfileFormSelector, nameInput, bioInput, avatar, items, userInfoSelectors, formSettingsObj, editAvatarFormSelector} from '../utils/constants'

import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithConfirm} from '../components/PopupWithConfirm.js'
import {UserInfo} from '../components/UserInfo.js'

import './index.css';



const userInfo = new UserInfo(userInfoSelectors);

const editProfilePopup = new PopupWithForm('.modal_type_edit-profile', (inputValues) => {

  userInfo.setUserInfo(inputValues);

  editProfilePopup.closePopup();
});

const editAvatarPopup = new PopupWithForm('.modal_type_edit-avatar', (inputValues) => {

  avatar.src = inputValues.link;

  editAvatarPopup.closePopup();
});

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

const bigImagePopup = new PopupWithImage('.modal_type_big-image');

const addCardFormValidator = new FormValidator(formSettingsObj, addCardFormSelector); 

const editProfileFormValidator = new FormValidator(formSettingsObj, editProfileFormSelector); 

const editAvatarFormValidator = new FormValidator(formSettingsObj, editAvatarFormSelector); 



editProfilePopup.setEventListeners();

editAvatarPopup.setEventListeners();

addCardPopup.setEventListeners();

addCardFormValidator.enableValidation();

editProfileFormValidator.enableValidation();

editAvatarFormValidator.enableValidation();



function editProfile() {
  editProfilePopup.openPopup();

  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  bioInput.value = userInfoObj.bio;
}

function editAvatar() {
  editAvatarPopup.openPopup();
}

function renderer(cardData) {

  const newCard = new Card(cardData, '.card-template',  handleCardClick);

  const cardElement = newCard.createNewCard();
  return cardElement;
}

function handleCardClick(name, link) {
  bigImagePopup.setEventListeners();
  bigImagePopup.openPopup(name, link);
}



editProfileBtn.addEventListener('click', editProfile);
editAvatarBtn.addEventListener('click', editAvatar);

addCardButton.addEventListener('click', () => {
  addCardPopup.openPopup();
  //отключение кнопки сохранить
  modalAddCardType.querySelector('.modal__container').reset();
  modalAddCardTypeSaveBtn.setAttribute('disabled', true);
  modalAddCardTypeSaveBtn.classList.add('modal__save-btn_disabled');
});