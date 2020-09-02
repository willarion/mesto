const editProfileBtn = document.querySelector('.profile__edit-btn');
const closeModalBtn = document.querySelector('.modal__reset-btn');
const modal = document.querySelector('.modal_type_edit-profile');

const formElement = document.querySelector('.modal__container');
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
const modalBigImagePicture = modalBigImage.querySelector('.modal__image');
const modalBigImageCaption = modalBigImage.querySelector('.modal__caption');

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
const cardTemplate = document.querySelector('.card-template').content; //содержание template
const cardList = document.querySelector('.elements__list'); //секция, куда мы добавляем карточки




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

//добавление карточек
function createNewCard(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.element__text');
  const cardImage = cardElement.querySelector('.element__image');
  const likeCardBtn = cardElement.querySelector('.element__like');
  const deleteCardBtn = cardElement.querySelector('.element__delete-btn');
  
  likeCardBtn.addEventListener('click', function (evt) {
    const eventTarget = evt.target; eventTarget.classList.toggle('element__like_is-liked'); 
  });  

  deleteCardBtn.addEventListener('click', function (evt) {
    evt.target.closest('.card-element').remove() 
  });  

  cardImage.addEventListener('click', function () {
    modalBigImagePicture.src = data.link;
    modalBigImageCaption.textContent = data.name;

    openModal(modalBigImage);
  }); 

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  
  return cardElement;
}
  
function renderCard(card) {
  cardList.prepend(card);
} 

initialCards.forEach((data) => {
  const card = createNewCard(data);
  renderCard(card);
});



editProfileBtn.addEventListener('click', editProfile);
modalClosing();
formElement.addEventListener('submit', formSubmitHandler);

addCardButton.addEventListener('click', () => openModal(modalAddCardType));
modalAddCardTypeForm.addEventListener('submit', saveNewCardHandler);














