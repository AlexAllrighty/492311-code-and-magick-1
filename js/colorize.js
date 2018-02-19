'use strict';

(function () {
  window.bigWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  window.bigWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  window.wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var bigWizardFireball = document.querySelector('.setup-fireball-wrap');
  var bigWizardFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var bigWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var bigWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  bigWizardFireball.addEventListener('click', function () {
    bigWizardFireball.style.backgroundColor = window.getRandomValue(bigWizardFireballColor);
});

  window.onclickChangeColor = function (object, property) {
    object.addEventListener('click', function () {
      object.style.fill = window.getRandomValue(property);
    });
  };

  var onclickChangeColor = function (object, property) {
    object.addEventListener('click', function () {
      object.style.fill = window.getRandomValue(property);
    });
  };
  onclickChangeColor(bigWizardEyes, window.wizardEyesColor);
  onclickChangeColor(bigWizardCoat, window.wizardCoatColor);


  bigWizardFireball.addEventListener('click', function () {
    bigWizardFireball.style.backgroundColor = window.getRandomValue(bigWizardFireballColor);
  });

})();

