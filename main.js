/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options, renderError, renderLoading) {
    _classCallCheck(this, Api);

    this._baseUrl = options.baseUrl;
    this._authorization = options.headers.authorization;
    this._contentType = options.headers["Content-Type"];
    this._renderError = renderError;
    this._renderLoading = renderLoading;
  }

  _createClass(Api, [{
    key: "_handleOriginalResponse",
    value: function _handleOriginalResponse(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res.status);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: {
          authorization: this._authorization
        }
      }).then(this._handleOriginalResponse);
    }
  }, {
    key: "_getInitialCards",
    value: function _getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: {
          authorization: this._authorization
        }
      }).then(this._handleOriginalResponse);
    }
  }, {
    key: "renderInitialPage",
    value: function renderInitialPage(setInitialUserInfo, callbackForRenderInitialCards) {
      var _this = this;

      Promise.all([this.getUserInfo(), this._getInitialCards()]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            userData = _ref2[0],
            initialCards = _ref2[1];

        setInitialUserInfo(userData);
        callbackForRenderInitialCards(initialCards);
      })["catch"](function (err) {
        _this._renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
      });
    }
  }, {
    key: "editUserInfo",
    value: function editUserInfo(userInfoObj, setUserInfoFromApi, submitBtn, editProfilePopup) {
      var _this2 = this;

      fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify(userInfoObj)
      }).then(this._handleOriginalResponse).then(function (res) {
        setUserInfoFromApi(res);
      })["catch"](function (err) {
        _this2._renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
      })["finally"](this._renderLoading(false, submitBtn, editProfilePopup));
    }
  }, {
    key: "editAvatar",
    value: function editAvatar(avatarLink, setAvatarFromApi, submitBtn, editAvatarPopup) {
      var _this3 = this;

      fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify(avatarLink)
      }).then(this._handleOriginalResponse).then(function (res) {
        setAvatarFromApi(res);
      })["catch"](function (err) {
        _this3._renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
      })["finally"](this._renderLoading(false, submitBtn, editAvatarPopup));
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(cardInfo, createNewCardFromApi, submitBtn, addCardPopup) {
      var _this4 = this;

      fetch("".concat(this._baseUrl, "/cards"), {
        method: 'POST',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify(cardInfo)
      }).then(this._handleOriginalResponse).then(function (res) {
        createNewCardFromApi(res);
      })["catch"](function (err) {
        _this4._renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
      })["finally"](this._renderLoading(false, submitBtn, addCardPopup));
    }
  }, {
    key: "getCardData",
    value: function getCardData(cardId, cardElement) {
      this._cardId = cardId;
      this._cardElement = cardElement;
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(closeConfirmPopup) {
      var _this5 = this;

      fetch("".concat(this._baseUrl, "/cards/").concat(this._cardId), {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
        }
      }).then(this._handleOriginalResponse).then(function (res) {
        console.log(res);

        _this5._cardElement.remove();
      })["catch"](function (err) {
        _this5._renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
      })["finally"](closeConfirmPopup);
    }
  }, {
    key: "putCardLike",
    value: function putCardLike() {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(this._cardId), {
        method: 'PUT',
        headers: {
          authorization: this._authorization
        }
      }).then(this._handleOriginalResponse);
    }
  }, {
    key: "deleteCardLike",
    value: function deleteCardLike() {
      return fetch("".concat(this._baseUrl, "/cards/likes/").concat(this._cardId), {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
        }
      }).then(this._handleOriginalResponse);
    }
  }]);

  return Api;
}();

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(data, cardSelector, handleCardClick, deleteCardCallback, likeCardCallback) {
    _classCallCheck(this, Card);

    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._сardLikes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCardCallback = deleteCardCallback;
    this._likeCardCallback = likeCardCallback;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector(this._cardSelector).content;
      var cardElement = cardTemplate.cloneNode(true);
      return cardElement;
    }
  }, {
    key: "createNewCard",
    value: function createNewCard(isCardCreatedByUser, userInfoObj) {
      this._cardElement = this._getTemplate();
      this._cardImage = this._cardElement.querySelector('.element__image');

      if (isCardCreatedByUser) {
        this._cardElement.querySelector('.element__delete-btn').classList.add('element__delete-btn_visible');
      }

      this._cardElement.querySelector('.element__text').textContent = this._name;
      this._cardImage.src = this._link;

      if (/[а-я]/i.test(this._name)) {
        this._cardImage.alt = this._name;
      } else {
        this._cardImage.alt = 'место';
      }

      this._cardElement.querySelector('.element__like-counter').textContent = this._сardLikes.length;
      var name = userInfoObj.name;
      var about = userInfoObj.bio;

      var likedByUser = this._сardLikes.find(function (like) {
        return like.name === name && like.about === about;
      });

      if (likedByUser !== undefined) {
        this._cardElement.querySelector('.element__like').classList.add('element__like_is-liked');
      }

      this._setEventListeners(this._cardImage);

      return this._cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(image) {
      var _this = this;

      this._cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        _this._likeCardCallback(evt);
      });

      this._cardElement.querySelector('.element__delete-btn').addEventListener('click', function (evt) {
        _this._deleteCardCallback(evt);
      });

      image.addEventListener('click', function () {
        _this._handleCardClick(_this._name, _this._link);
      });
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/*! exports provided: FormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidator", function() { return FormValidator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormValidator = function FormValidator(formSettingsObj, formTypeSelector) {
  var _this = this;

  _classCallCheck(this, FormValidator);

  _defineProperty(this, "_showInputError", function (formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  });

  _defineProperty(this, "_hideInputError", function (formElement, inputElement, inputErrorClass, errorClass) {
    var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  });

  _defineProperty(this, "_checkInputValidity", function (formElement, inputElement) {
    if (!inputElement.validity.valid) {
      _this._showInputError(formElement, inputElement, inputElement.validationMessage, _this._inputErrorClass, _this._errorClass);
    } else {
      _this._hideInputError(formElement, inputElement, _this._inputErrorClass, _this._errorClass);
    }
  });

  _defineProperty(this, "_hasInvalidInput", function (inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  });

  _defineProperty(this, "_toggleButtonState", function (inputList, buttonElement, inactiveButtonClass) {
    if (_this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  });

  _defineProperty(this, "_setEventListeners", function (formElement, inputSelector, submitButtonSelector) {
    var inputList = Array.from(formElement.querySelectorAll(inputSelector));
    var buttonElement = formElement.querySelector(submitButtonSelector);

    _this._toggleButtonState(inputList, buttonElement, _this._inactiveButtonClass);

    inputList.forEach(function (inputElement) {
      inputElement.addEventListener('input', function () {
        _this._checkInputValidity(formElement, inputElement);

        _this._toggleButtonState(inputList, buttonElement, _this._inactiveButtonClass);
      });
    });
  });

  _defineProperty(this, "enableValidation", function () {
    _this._formTypeSelector.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    _this._setEventListeners(_this._formTypeSelector, _this._inputSelector, _this._submitButtonSelector);
  });

  this._inputSelector = formSettingsObj.inputSelector;
  this._submitButtonSelector = formSettingsObj.submitButtonSelector;
  this._inactiveButtonClass = formSettingsObj.inactiveButtonClass;
  this._inputErrorClass = formSettingsObj.inputErrorClass;
  this._errorClass = formSettingsObj.errorClass;
  this._formTypeSelector = formTypeSelector;
};



/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._escapePopupClosing = this._escapePopupClosing.bind(this);
  }

  _createClass(Popup, [{
    key: "_escapePopupClosing",
    value: function _escapePopupClosing(evt) {
      if (evt.key === "Escape") {
        this.closePopup(this._popupSelector);
      }
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add('modal_visible');

      document.addEventListener('keydown', this._escapePopupClosing);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove('modal_visible');

      document.removeEventListener('keydown', this._escapePopupClosing);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__reset-btn')) {
          _this.closePopup(_this._popupSelector);
        }
      });
    }
  }]);

  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithConfirm.js":
/*!********************************************!*\
  !*** ./src/components/PopupWithConfirm.js ***!
  \********************************************/
/*! exports provided: PopupWithConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWithConfirm", function() { return PopupWithConfirm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirm, _Popup);

  var _super = _createSuper(PopupWithConfirm);

  function PopupWithConfirm(popupSelector, confirmSubmitCallback) {
    var _this;

    _classCallCheck(this, PopupWithConfirm);

    _this = _super.call(this, popupSelector);
    _this._confirmSubmitCallback = confirmSubmitCallback;
    _this._submitBtn = document.querySelector(popupSelector).querySelector('.modal__save-btn');
    return _this;
  }

  _createClass(PopupWithConfirm, [{
    key: "openPopup",
    value: function openPopup(submitBtnValue) {
      this._submitBtn.value = submitBtnValue;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "openPopup", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "setEventListeners", this).call(this);

      this._submitBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this2._confirmSubmitCallback();
      });
    }
  }]);

  return PopupWithConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["Popup"]);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/*! exports provided: PopupWithForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWithForm", function() { return PopupWithForm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, formSubmitCallback) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._formSubmitCallback = formSubmitCallback;
    _this._popupWithForm = document.querySelector(popupSelector);
    _this._submitBtn = _this._popupWithForm.querySelector('.modal__save-btn');
    _this._popupForm = _this._popup.querySelector('.modal__container');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputList = Array.from(this._popupWithForm.querySelectorAll('.modal__input-line'));
      var inputValues = {};
      inputList.forEach(function (item) {
        inputValues[item.name] = item.value;
        return inputValues;
      });
      return inputValues;
    }
  }, {
    key: "openPopup",
    value: function openPopup(submitBtnValue) {
      this._submitBtn.value = submitBtnValue;

      _get(_getPrototypeOf(PopupWithForm.prototype), "openPopup", this).call(this);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      var inputs = Array.from(this._getInputValues);
      inputs.forEach(function (input) {
        input.value = '';
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "closePopup", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this2._formSubmitCallback(_this2._getInputValues(), _this2._submitBtn);
      });
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["Popup"]);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/*! exports provided: PopupWithImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWithImage", function() { return PopupWithImage; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._bigImagePopup = document.querySelector(popupSelector);
    _this._popupImage = _this._bigImagePopup.querySelector('.modal__image');
    _this._popupCaption = _this._bigImagePopup.querySelector('.modal__caption');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "openPopup",
    value: function openPopup(name, link) {
      this._popupImage.src = link;
      this._popupCaption.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "openPopup", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["Popup"]);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this.renderer = renderer;
    this._cardList = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderInitialCards",
    value: function renderInitialCards(items, isCardCreatedByUserCheck) {
      var _this = this;

      items.forEach(function (cardItem) {
        if (isCardCreatedByUserCheck(cardItem)) {
          _this.addItem(_this.renderer(cardItem, true), items);
        } else {
          _this.addItem(_this.renderer(cardItem), items);
        }
      });
    }
  }, {
    key: "addItem",
    value: function addItem(cardElement, array) {
      if (array) {
        this._cardList.append(cardElement);
      } else {
        this._cardList.prepend(cardElement);
      }
    }
  }]);

  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
        bioSelector = _ref.bioSelector;

    _classCallCheck(this, UserInfo);

    this._nameSelector = nameSelector;
    this._bioSelector = bioSelector;
    this._name = document.querySelector(nameSelector);
    this._bio = document.querySelector(bioSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userInfo = {};
      userInfo.name = this._name.textContent;
      userInfo.bio = this._bio.textContent;
      return userInfo;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(inputValues) {
      this._name.textContent = inputValues.name;
      this._bio.textContent = inputValues.about;
    }
  }]);

  return UserInfo;
}();

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithConfirm.js */ "./src/components/PopupWithConfirm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Popup */ "./src/components/Popup.js");











var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["Api"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__["apiSettings"], renderError, renderLoading);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["UserInfo"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__["userInfoSelectors"]);
var editProfilePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["PopupWithForm"]('.modal_type_edit-profile', function (inputValues, submitBtn) {
  renderLoading(true, submitBtn);
  api.editUserInfo(inputValues, setUserInfoFromApi, submitBtn, editProfilePopup);
});
var editAvatarPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["PopupWithForm"]('.modal_type_edit-avatar', function (inputValues, submitBtn) {
  renderLoading(true, submitBtn);
  api.editAvatar(inputValues, setAvatarFromApi, submitBtn, editAvatarPopup);
});
var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__["Section"]({
  items: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["items"],
  renderer: renderer
}, '.elements__list');
var addCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["PopupWithForm"]('.modal_type_add-card', function (inputValues, submitBtn) {
  renderLoading(true, submitBtn);
  var cardInfo = {};
  cardInfo.name = inputValues.title;
  cardInfo.link = inputValues.link;
  api.addNewCard(cardInfo, createNewCardFromApi, submitBtn, addCardPopup);
});
var bigImagePopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["PopupWithImage"]('.modal_type_big-image');
var addCardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["FormValidator"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__["formSettingsObj"], _utils_constants__WEBPACK_IMPORTED_MODULE_0__["addCardFormSelector"]);
var editProfileFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["FormValidator"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__["formSettingsObj"], _utils_constants__WEBPACK_IMPORTED_MODULE_0__["editProfileFormSelector"]);
var editAvatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["FormValidator"](_utils_constants__WEBPACK_IMPORTED_MODULE_0__["formSettingsObj"], _utils_constants__WEBPACK_IMPORTED_MODULE_0__["editAvatarFormSelector"]);
var errorAlertPopup = new _components_Popup__WEBPACK_IMPORTED_MODULE_10__["Popup"]('.modal_type_error-alert');
var deleteConfirmPopup = new _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__["PopupWithConfirm"]('.modal_type_delete-confirm', function () {
  api.deleteCard(deleteConfirmPopup.closePopup());
});
deleteConfirmPopup.setEventListeners();
api.renderInitialPage(setUserInfoFromApi, callbackForRenderInitialCards);
errorAlertPopup.setEventListeners();
editProfilePopup.setEventListeners();
editAvatarPopup.setEventListeners();
addCardPopup.setEventListeners();
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

function createNewCardFromApi(obj) {
  section.addItem(section.renderer(obj, true));
}

function setUserInfoFromApi(obj) {
  userInfo.setUserInfo(obj);
  setAvatarFromApi(obj);
}

function setAvatarFromApi(obj) {
  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["avatar"].src = obj.avatar;
}

function isCardCreatedByUserCheck(card) {
  var userInfoObj = userInfo.getUserInfo();

  if (card.owner.name === userInfoObj.name && card.owner.about === userInfoObj.bio) {
    return true;
  }
}

function callbackForRenderInitialCards(items) {
  section.renderInitialCards(items, isCardCreatedByUserCheck);
}

function editProfile() {
  editProfilePopup.openPopup('Сохранить');
  var userInfoObj = userInfo.getUserInfo();
  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["nameInput"].value = userInfoObj.name;
  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["bioInput"].value = userInfoObj.bio;
} //появление инфы о пользователе из профиля в попапе


function editAvatar() {
  editAvatarPopup.openPopup('Сохранить');
}

function renderer(cardData, isCardCreatedByUser) {
  var userInfoObj = userInfo.getUserInfo();
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["Card"](cardData, '.card-template', handleCardClick, deleteCardCallback, likeCardCallback);
  var cardElement = newCard.createNewCard(isCardCreatedByUser, userInfoObj);
  return cardElement;
}

function deleteCardCallback(evt) {
  var cardElement = evt.target.closest(".card-element");
  api.getCardData(this._cardId, cardElement);
  deleteConfirmPopup.openPopup('Да');
}

function likeCardCallback(evt) {
  var cardElement = evt.target.closest(".card-element");
  api.getCardData(this._cardId);

  if (evt.target.classList.contains('element__like_is-liked')) {
    api.deleteCardLike().then(function (res) {
      showChangedLikesNumber(cardElement, res, evt.target);
    })["catch"](function (err) {
      renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
    });
  } else {
    api.putCardLike().then(function (res) {
      showChangedLikesNumber(cardElement, res, evt.target);
    })["catch"](function (err) {
      renderError("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
    });
  }
}

function showChangedLikesNumber(cardElement, obj, evtTarget) {
  evtTarget.classList.toggle('element__like_is-liked');
  cardElement.querySelector('.element__like-counter').textContent = obj.likes.length;
}

function handleCardClick(name, link) {
  bigImagePopup.setEventListeners();
  bigImagePopup.openPopup(name, link);
}

function renderLoading(isLoading, submitBtn, popupType) {
  if (isLoading) {
    submitBtn.value = 'Сохранение...';
  } else {
    popupType.closePopup();
  }
}

function renderError(err) {
  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["errorText"].textContent = err;
  errorAlertPopup.openPopup();
}

_utils_constants__WEBPACK_IMPORTED_MODULE_0__["editProfileBtn"].addEventListener('click', editProfile);
_utils_constants__WEBPACK_IMPORTED_MODULE_0__["editAvatarBtn"].addEventListener('click', editAvatar);
_utils_constants__WEBPACK_IMPORTED_MODULE_0__["addCardButton"].addEventListener('click', function () {
  addCardPopup.openPopup('Создать'); //отключение кнопки сохранить

  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["modalAddCardType"].querySelector('.modal__container').reset();
  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["modalAddCardTypeSaveBtn"].setAttribute('disabled', true);
  _utils_constants__WEBPACK_IMPORTED_MODULE_0__["modalAddCardTypeSaveBtn"].classList.add('modal__save-btn_disabled');
});

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: editProfileBtn, editAvatarBtn, addCardButton, modalAddCardType, modalAddCardTypeSaveBtn, addCardFormSelector, editProfileFormSelector, nameInput, bioInput, avatar, items, userInfoSelectors, formSettingsObj, editAvatarFormSelector, apiSettings, errorText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfileBtn", function() { return editProfileBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editAvatarBtn", function() { return editAvatarBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCardButton", function() { return addCardButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalAddCardType", function() { return modalAddCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalAddCardTypeSaveBtn", function() { return modalAddCardTypeSaveBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCardFormSelector", function() { return addCardFormSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProfileFormSelector", function() { return editProfileFormSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameInput", function() { return nameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bioInput", function() { return bioInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatar", function() { return avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoSelectors", function() { return userInfoSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSettingsObj", function() { return formSettingsObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editAvatarFormSelector", function() { return editAvatarFormSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiSettings", function() { return apiSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorText", function() { return errorText; });
var editProfileBtn = document.querySelector('.profile__edit-btn');
var editAvatarBtn = document.querySelector('.profile__edit-avatar-btn');
var addCardButton = document.querySelector('.profile__add-btn');
var modalAddCardType = document.querySelector('.modal_type_add-card');
var modalAddCardTypeSaveBtn = modalAddCardType.querySelector('.modal__save-btn');
var addCardFormSelector = document.querySelector('.modal__add-card-form');
var editProfileFormSelector = document.querySelector('.modal__edit-profile-form');
var editAvatarFormSelector = document.querySelector('.modal__edit-avatar-form');
var nameInput = document.querySelector('.modal__name');
var bioInput = document.querySelector('.modal__bio');
var avatar = document.querySelector('.profile__avatar');
var errorText = document.querySelector('.modal_type_error-alert').querySelector('.modal__title');
var items = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var userInfoSelectors = {
  nameSelector: '.profile__name',
  bioSelector: '.profile__bio'
};
var formSettingsObj = {
  inputSelector: '.modal__input-line',
  submitButtonSelector: '.modal__save-btn',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input-line_type_error',
  errorClass: 'modal__error_visible'
};
var apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: 'fd3bf28b-131d-4028-93e3-e0966938f828',
    'Content-Type': 'application/json'
  }
};


/***/ })

/******/ });
//# sourceMappingURL=main.js.map