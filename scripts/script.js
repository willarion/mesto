// открытие и закрытие попапа. начало
const editProfileBtn = document.querySelector('.profile__edit-btn');
const closePopUpBtn = document.querySelector('.pop-up__reset-btn');
const popUp = document.querySelector('.pop-up');

function togglePopUp() {
  popUp.classList.toggle('pop-up_visible');
}

editProfileBtn.addEventListener('click', togglePopUp);
closePopUpBtn.addEventListener('click', togglePopUp);
//конец

//работа кнопки "сохранить"
let formElement = document.querySelector('.pop-up__container');

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  let nameInput = document.querySelector('.pop-up__name');
  let bioInput = document.querySelector('.pop-up__bio');

  let name = nameInput.value;
  let bio = bioInput.value;

  let profileName = document.querySelector('.profile__name');
  let profileBio = document.querySelector('.profile__bio');

  profileName.textContent = name;
  profileBio.textContent = bio;

  popUp.classList.remove('pop-up_visible');
}

formElement.addEventListener('submit', formSubmitHandler);