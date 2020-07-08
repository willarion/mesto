// все константы и переменные
const editProfileBtn = document.querySelector('.profile__edit-btn');
const closePopUpBtn = document.querySelector('.pop-up__reset-btn');
const popUp = document.querySelector('.pop-up');

let formElement = document.querySelector('.pop-up__container');
let nameInput = document.querySelector('.pop-up__name');
let bioInput = document.querySelector('.pop-up__bio');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');

// открытие и закрытие попапа
function openPopUp() {
  popUp.classList.add('pop-up_visible');
  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
}

function closePopUp() {
  popUp.classList.remove('pop-up_visible');
}

editProfileBtn.addEventListener('click', openPopUp);
closePopUpBtn.addEventListener('click', closePopUp);


//работа кнопки "сохранить"
function formSubmitHandler (evt) {
  evt.preventDefault(); 

//  let name = nameInput.value;
//  let bio = bioInput.value;

  profileName.textContent = nameInput.value;;
  profileBio.textContent = bioInput.value;

  closePopUp();
}

formElement.addEventListener('submit', formSubmitHandler);