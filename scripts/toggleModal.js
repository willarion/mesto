//работа модальных окон
function toggleModal(modalType) {
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
closeModalBtn.addEventListener('click', () => toggleModal(modal));
function formSubmitHandler(evt) {
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
modalAddCardTypeResetBtn.addEventListener('click', () => toggleModal(modalAddCardType));
//работа кнопки "сохранить"
//объекты полей ввода
const placeTitle = modalAddCardType.querySelector('.modal__place-title');
const imageURL = modalAddCardType.querySelector('.modal__image-url');
const modalAddCardTypeForm = modalAddCardType.querySelector('.modal__container');
function saveNewCardHandler(evt) {
  evt.preventDefault();

  const cardInfo = { name: placeTitle.value, link: imageURL.value };
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
//закрытие 
modalBigImageResetBtn.addEventListener('click', () => toggleModal(modalBigImage));
