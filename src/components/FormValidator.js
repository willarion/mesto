class FormValidator {

  constructor(formSettingsObj, formTypeSelector) {
    this._inputSelector = formSettingsObj.inputSelector; 
    this._submitButtonSelector = formSettingsObj.submitButtonSelector; 
    this._inactiveButtonClass = formSettingsObj.inactiveButtonClass; 
    this._inputErrorClass = formSettingsObj.inputErrorClass; 
    this._errorClass = formSettingsObj.errorClass; 

    this._formTypeSelector = formTypeSelector;
  }

  _showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, this._inputErrorClass, this._errorClass);
    } else {
      this._hideInputError(formElement, inputElement, this._inputErrorClass, this._errorClass);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _setEventListeners = (formElement, inputSelector, submitButtonSelector) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
  
    this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
      });
    });
  };

  enableValidation = () => {
    this._formTypeSelector.addEventListener('submit',  (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(this._formTypeSelector, this._inputSelector, this._submitButtonSelector);
  }
}

export {FormValidator};