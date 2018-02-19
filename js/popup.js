'use strict';

(function () {
  var popUp = document.querySelector('.setup');
  var showPopupButton = document.querySelector('.setup-open');
  var hidePopupButton = popUp.querySelector('.setup-close');
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;
  var bigWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var bigWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var bigWizardFireball = document.querySelector('.setup-fireball-wrap');
  var bigWizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      closePopup();
    }
  };

  var openPopup = function () {
    popUp.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };


  var closePopup = function () {
    popUp.classList.add('hidden');
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
})()
