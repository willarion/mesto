import {Card} from './Сard.js'


const editProfileBtn = document.querySelector('.profile__edit-btn');
const closeModalBtn = document.querySelector('.modal__reset-btn');
const modal = document.querySelector('.modal_type_edit-profile');

const editProfileFormElement = document.querySelector('.modal__edit-profile-form');
const nameInput = document.querySelector('.modal__name');
const bioInput = document.querySelector('.modal__bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');

const addCardButton = document.querySelector('.profile__add-btn');
const modalAddCardType = document.querySelector('.modal_type_add-card');
const modalAddCardTypeResetBtn = modalAddCardType.querySelector('.modal__reset-btn');
const modalAddCardTypeSaveBtn = modalAddCardType.querySelector('.modal__save-btn');

const placeTitle = modalAddCardType.querySelector('.modal__place-title');
const imageURL = modalAddCardType.querySelector('.modal__image-url');
const modalAddCardTypeForm = modalAddCardType.querySelector('.modal__container');

const modalBigImage = document.querySelector('.modal_type_big-image');
const modalBigImageResetBtn = modalBigImage.querySelector('.modal__reset-btn');


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


//сохранить
function formSubmitHandler (evt) { 
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  closeModal(modal);
}


//работа кнопки "сохранить" для редактирования профиля
function saveNewCardHandler(evt) {
  evt.preventDefault();

  const cardInfo = {name: placeTitle.value, link: imageURL.value};
  const newCard = createNewCard(cardInfo); 
  renderCard(newCard);
  
  closeModal(modalAddCardType);
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



function renderCard(card) {
  cardList.prepend(card);
}


initialCards.forEach((data) => {
  const card = new Card(data, '.card-template', openModal, modalBigImage);
  const cardElement = card.createNewCard();

  renderCard(cardElement);
});