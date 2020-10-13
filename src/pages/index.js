import {editProfileBtn, editAvatarBtn, addCardButton, modalAddCardType, modalAddCardTypeSaveBtn, addCardFormSelector, editProfileFormSelector, nameInput, bioInput, avatar, items, userInfoSelectors, formSettingsObj, editAvatarFormSelector, apiSettings, errorText} from '../utils/constants'

import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithConfirm} from '../components/PopupWithConfirm.js'
import {UserInfo} from '../components/UserInfo.js'
import {Api} from '../components/Api.js'

import './index.css';
import { Popup } from '../components/Popup'



const api = new Api(apiSettings, renderError);

const userInfo = new UserInfo(userInfoSelectors);

const editProfilePopup = new PopupWithForm('.modal_type_edit-profile', (inputValues) => {

  api.editUserInfo(inputValues, setUserInfoFromApi)

  editProfilePopup.closePopup();
});

const editAvatarPopup = new PopupWithForm('.modal_type_edit-avatar', (inputValues) => {

  //avatar.src = inputValues.link;
  api.editAvatar(inputValues, setAvatarFromApi)

  editAvatarPopup.closePopup();
});

const section = new Section({items, renderer}, '.elements__list');


const addCardPopup = new PopupWithForm('.modal_type_add-card', (inputValues) => {

  const cardInfo = {};
  cardInfo.name = inputValues.title;
  cardInfo.link = inputValues.link;
  
  api.addNewCard(cardInfo, createNewCardFromApi);
    
  addCardPopup.closePopup();
  }
);

const bigImagePopup = new PopupWithImage('.modal_type_big-image');

const addCardFormValidator = new FormValidator(formSettingsObj, addCardFormSelector); 

const editProfileFormValidator = new FormValidator(formSettingsObj, editProfileFormSelector); 

const editAvatarFormValidator = new FormValidator(formSettingsObj, editAvatarFormSelector); 

const errorAlertPopup = new Popup('.modal_type_error-alert');

const deleteConfirmPopup = new PopupWithConfirm('.modal_type_delete-confirm', (cardId) => {
  api.deleteCard(cardId);
});




deleteConfirmPopup.setEventListeners();

api.getUserInfo(setUserInfoFromApi);

api.getInitialCards(callbackForRenderInitialCards);

errorAlertPopup.setEventListeners();

editProfilePopup.setEventListeners();

editAvatarPopup.setEventListeners();

addCardPopup.setEventListeners();

addCardFormValidator.enableValidation();

editProfileFormValidator.enableValidation();

editAvatarFormValidator.enableValidation();




function createNewCardFromApi(obj) {
  section.addItem(section.renderer(obj, true));
}

function setUserInfoFromApi(obj) {
  userInfo.setUserInfo(obj);
  setAvatarFromApi(obj);
}

function setAvatarFromApi(obj) {
  avatar.src = obj.avatar;
}

function isCardCreatedByUserCheck(card) {
  const userInfoObj = userInfo.getUserInfo();
  if (card.owner.name === userInfoObj.name 
      && card.owner.about === userInfoObj.bio) {
        return true;
      }
}

function callbackForRenderInitialCards(items) {
  section.renderInitialCards(items, isCardCreatedByUserCheck);
}

function editProfile() {
  editProfilePopup.openPopup();

  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  bioInput.value = userInfoObj.bio;
} //появление инфы о пользователе из профиля в попапе

function editAvatar() {
  editAvatarPopup.openPopup();
}

function renderer(cardData, isCardCreatedByUser) {

  const newCard = new Card(cardData, '.card-template',  handleCardClick, deleteCardCallback, likeCardCallback);

  const cardElement = newCard.createNewCard(isCardCreatedByUser);
  return cardElement;
}

function deleteCardCallback(evt) {
  const cardElement = evt.target.closest(".card-element");

  deleteConfirmPopup.getCardData(this._cardId);
  api.getCardData(this._cardId, cardElement);

  deleteConfirmPopup.openPopup();
}

function likeCardCallback(evt) {
  const cardElement = evt.target.closest(".card-element");

  api.getCardData(this._cardId, cardElement);
  
  if (evt.target.classList.contains('element__like_is-liked')) 
    { 
      api.deleteCardLike(evt.target, showChangedLikesNumber) 
    } 
  else 
    { 
      api.putCardLike(evt.target, showChangedLikesNumber)
    }
}

function showChangedLikesNumber(cardElement, obj) {
  cardElement.querySelector('.element__like-counter').textContent = obj.likes.length;
}

function handleCardClick(name, link) {
  bigImagePopup.setEventListeners();
  bigImagePopup.openPopup(name, link);
}

function renderError(err) {
  errorText.textContent = err;
  errorAlertPopup.openPopup();
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






