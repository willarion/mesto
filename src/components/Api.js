export class Api {
  
  constructor(options, renderError) {
    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization; 
    this._contentType = options.headers["Content-Type"];
    this._renderError = renderError; 
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

  editUserInfo(userInfoObj, setUserInfoFromApi) {
    fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: this._authorization,
      'Content-Type': this._contentType
      },
    body: JSON.stringify(userInfoObj)
    })
    .then((res) =>  res.json())
    .then((res) => {
    setUserInfoFromApi(res);
    });
  }

}