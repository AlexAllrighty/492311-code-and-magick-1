'use strict';

(function () {
  window.popUp = document.querySelector('.setup');
  var showPopupButton = document.querySelector('.setup-open');
  var hidePopupButton = window.popUp.querySelector('.setup-close');
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.popUp.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };


  var closePopup = function () {
    window.popUp.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  showPopupButton.addEventListener('click', function () {
    openPopup();
  });

  showPopupButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE_ENTER) {
      openPopup();
    }
  });
  hidePopupButton.addEventListener('click', function () {
    closePopup();
  });
  hidePopupButton.addEventListener('keydown', function () {
    closePopup();
  });

})();
