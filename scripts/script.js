// все константы и переменные
const editProfileBtn = document.querySelector('.profile__edit-btn');
const closeModalBtn = document.querySelector('.modal__reset-btn');
const modal = document.querySelector('.modal_type_edit-profile');

let formElement = document.querySelector('.modal__container');
let nameInput = document.querySelector('.modal__name');
let bioInput = document.querySelector('.modal__bio');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');

// открытие и закрытие модала
function openModal() {
  modal.classList.add('modal_visible');
  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
}

function closeModal() {
  modal.classList.remove('modal_visible');
}

editProfileBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);


//работа кнопки "сохранить"
function formSubmitHandler (evt) {
  evt.preventDefault(); 

//  let name = nameInput.value;
//  let bio = bioInput.value;

  profileName.textContent = nameInput.value;;
  profileBio.textContent = bioInput.value;

  closeModal();
}

formElement.addEventListener('submit', formSubmitHandler);


//добавление 6-ти начальных карточек
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

for (let i = 0; i < initialCards.length; i += 1) {
    const cardElement = cardTemplate.cloneNode(true); //копируем содержание template

    cardElement.querySelector('.element__text').textContent = initialCards[i].name;
    cardElement.querySelector('.element__image').src = initialCards[i].link;

    cardList.append(cardElement);
  }

