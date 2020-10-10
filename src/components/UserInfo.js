export class UserInfo {

  constructor({nameSelector, bioSelector}) {
    this._nameSelector = nameSelector;
    this._bioSelector = bioSelector;
    this._name = document.querySelector(nameSelector);
    this._bio = document.querySelector(bioSelector);
  }

  getUserInfo() {
    const userInfo = {};

    userInfo.name = this._name.textContent;
    userInfo.bio = this._bio.textContent;

    return userInfo;
  }

  setUserInfo(inputValues) {
    this._name.textContent = inputValues.name;
    this._bio.textContent = inputValues.about;
  }
}