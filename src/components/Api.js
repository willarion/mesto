export class Api {
  
  constructor(options, renderError, renderLoading) {
    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization; 
    this._contentType = options.headers["Content-Type"];
    this._renderError = renderError; 
    this._renderLoading = renderLoading;
  }

  getUserInfo(setInitialUserInfo) {
    fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization
        }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      setInitialUserInfo(res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    }); 
  }

  getInitialCards(callbackForRenderInitialCards) {
    fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization
        }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      callbackForRenderInitialCards(res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    });
  }

  editUserInfo(userInfoObj, setUserInfoFromApi, submitBtn, editProfilePopup) {
    fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: this._authorization,
      'Content-Type': this._contentType
      },
      body: JSON.stringify(userInfoObj)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
    setUserInfoFromApi(res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    })
    .finally(this._renderLoading(false, submitBtn, editProfilePopup));
  }

  editAvatar(avatarLink, setAvatarFromApi, submitBtn, editAvatarPopup) {
    fetch(`${this._baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: this._authorization,
      'Content-Type': this._contentType
      },
      body: JSON.stringify(avatarLink)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      setAvatarFromApi(res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    })
    .finally(this._renderLoading(false, submitBtn, editAvatarPopup));
  }

  addNewCard(cardInfo, createNewCardFromApi, submitBtn, addCardPopup) {
    fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentType
        },
      body: JSON.stringify(cardInfo)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      createNewCardFromApi(res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    })
    .finally(this._renderLoading(false, submitBtn, addCardPopup));
  }

  getCardData(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
  }

  deleteCard() {
    fetch(`${this._baseUrl}/cards/${this._cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
        }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      console.log(res);
      this._cardElement.remove();
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    });
  }

  putCardLike(evtTarget, showChangedLikesNumber) {
    fetch(`${this._baseUrl}/cards/likes/${this._cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
        }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      evtTarget.classList.toggle('element__like_is-liked');
      showChangedLikesNumber(this._cardElement, res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    });
  }

  deleteCardLike(evtTarget, showChangedLikesNumber) {
    fetch(`${this._baseUrl}/cards/likes/${this._cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
        }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((res) => {
      evtTarget.classList.toggle('element__like_is-liked');
      showChangedLikesNumber(this._cardElement, res);
    })
    .catch((err) => {
      this._renderError(`Ошибка: ${err}`);
    });
  }
  

}