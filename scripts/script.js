//работа модальных окон
function toggleModal (modalType) {
  modalType.classList.toggle('modal_visible');
}

// открытие и закрытие модала изменения профиля
const editProfileBtn = document.querySelector('.profile__edit-btn');
const closeModalBtn = document.querySelector('.modal__reset-btn');
const modal = document.querySelector('.modal_type_edit-profile');

const formElement = document.querySelector('.modal__container');
const nameInput = document.querySelector('.modal__name');
const bioInput = document.querySelector('.modal__bio');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');

function openModal() {
  toggleModal(modal);
  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
}

editProfileBtn.addEventListener('click', openModal);


function formSubmitHandler (evt) { //сохранить
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  toggleModal(modal);
}

formElement.addEventListener('submit', formSubmitHandler);

//открытие модалки добавления карточки пользователем
//объекты-кнопки
const addCardButton = document.querySelector('.profile__add-btn');
const modalAddCardType = document.querySelector('.modal_type_add-card');
const modalAddCardTypeResetBtn = modalAddCardType.querySelector('.modal__reset-btn');
const modalAddCardTypeSaveBtn = modalAddCardType.querySelector('.modal__save-btn');


addCardButton.addEventListener('click', () => toggleModal(modalAddCardType));


//работа кнопки "сохранить"
//объекты полей ввода
const placeTitle = modalAddCardType.querySelector('.modal__place-title');
const imageURL = modalAddCardType.querySelector('.modal__image-url');
const modalAddCardTypeForm = modalAddCardType.querySelector('.modal__container');

function saveNewCardHandler(evt) {
  evt.preventDefault();

 const cardInfo = {name: placeTitle.value, link: imageURL.value};
 const newCard = createNewCard(cardInfo); 
 renderCard(newCard);
  
  toggleModal(modalAddCardType);
}

modalAddCardTypeForm.addEventListener('submit', saveNewCardHandler);


//модалка с большой картинкой (открытие по событию в создании карточки выше)
const modalBigImage = document.querySelector('.modal_type_big-image');
const modalBigImageResetBtn = modalBigImage.querySelector('.modal__reset-btn');
const modalBigImagePicture = modalBigImage.querySelector('.modal__image');
const modalBigImageCaption = modalBigImage.querySelector('.modal__caption');


//закрытие всех модалок кликом и esc
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

modalClosing();


//добавление карточек
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

  cardImage.addEventListener('click', function (evt) {
    modalBigImagePicture.src = data.link;
    modalBigImageCaption.textContent = data.name;

  toggleModal(modalBigImage);
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






